const $ = (id) => document.getElementById(id);
let INDEX = null;
const cache = new Map();

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function md(text) {
  return DOMPurify.sanitize(marked.parse(text, {mangle: false, headerIds: false}));
}

// Split a markdown file into preamble, endpoint/section blocks and schema blocks (fence-aware).
function parseFile(text) {
  const lines = text.split("\n");
  const pre = [];
  const sections = [];
  const schemas = new Map();
  let cur = null, inSchemas = false, curSchema = null, fence = false;
  for (const line of lines) {
    if (line.trimStart().startsWith("```")) fence = !fence;
    const isH2 = !fence && line.startsWith("## ");
    const isH3 = !fence && line.startsWith("### ");
    if (isH2) {
      const h = line.slice(3).trim();
      curSchema = null;
      if (h === "Schemas") { inSchemas = true; cur = null; continue; }
      inSchemas = false;
      cur = {h, body: []};
      sections.push(cur);
      continue;
    }
    if (inSchemas && isH3) {
      const name = line.slice(4).trim().replace(/^`|`$/g, "");
      curSchema = {name, body: [line]};
      schemas.set(name, curSchema);
      continue;
    }
    if (curSchema) curSchema.body.push(line);
    else if (cur) cur.body.push(line);
    else if (!inSchemas) pre.push(line);
  }
  const clean = (a) => a.join("\n").replace(/\n---\s*$/g, "").trim();
  return {
    pre: clean(pre),
    sections: sections.map((s) => ({h: s.h, body: "## " + s.h + "\n" + clean(s.body)})),
    schemas: new Map([...schemas].map(([k, v]) => [k, clean(v.body)])),
  };
}

async function loadFile(pid, file) {
  const k = pid + "/" + file;
  if (!cache.has(k)) {
    const res = await fetch(`ref/${pid}/${file}.md`);
    if (!res.ok) throw new Error(res.status);
    cache.set(k, parseFile(await res.text()));
  }
  return cache.get(k);
}

function find(pid, file) {
  const p = INDEX.platforms.find((x) => x.id === pid);
  return {p, f: p && p.files.find((x) => x.file === file)};
}

function buildSide(pid) {
  const side = $("side");
  side.innerHTML = "";
  for (const p of INDEX.platforms) {
    const d = document.createElement("details");
    d.open = p.id === pid;
    d.innerHTML = `<summary>${esc(p.label)} <small>(${p.files.length})</small></summary>` +
      p.files.map((f) => `<a href="#${p.id}/${f.file}" data-k="${p.id}/${f.file}">${esc(f.title.replace(/^[^:]*API[^:]*:\s*/, ""))}</a>`).join("");
    side.appendChild(d);
  }
}

function markCurrent(pid, file) {
  document.querySelectorAll("#side a").forEach((a) => a.classList.toggle("cur", a.dataset.k === pid + "/" + file));
}

function linkSchemas(root, pid, file, parsed) {
  root.querySelectorAll("code").forEach((c) => {
    if (c.parentElement.tagName === "PRE" || !parsed.schemas.has(c.textContent)) return;
    const a = document.createElement("a");
    a.href = `#${pid}/${file}/s:${encodeURIComponent(c.textContent)}`;
    c.replaceWith(a);
    a.appendChild(c);
  });
}

function crumb(p, f, extra) {
  return `<p class="crumb"><a href="#">All</a> / ${esc(p.label)} / <a href="#${p.id}/${f.file}">${esc(f.title)}</a>${extra ? " / " + esc(extra) : ""}</p>`;
}

function methodSpan(h) {
  const m = /^(GET|POST|PUT|PATCH|DELETE)\s+(.*)$/.exec(h);
  return m ? `<span class="m">${m[1]}</span>${esc(m[2])}` : esc(h);
}

function home() {
  $("view").innerHTML = "<h1>Integrations</h1><div class=\"list\">" +
    INDEX.platforms.map((p) => {
      const n = p.files.reduce((a, f) => a + f.sections.length, 0);
      return `<a href="#${p.id}/${p.files[0].file}">${esc(p.label)}<small>${p.files.length} areas, ${n} sections</small></a>`;
    }).join("") + "</div>";
}

async function route() {
  if (!INDEX) return;
  const q = $("q").value.trim();
  if (q) return search(q);
  const [pid, file, part] = location.hash.slice(1).split("/");
  buildSide(pid);
  if (!pid) return home();
  const {p, f} = find(pid, file || "");
  if (!f) return home();
  markCurrent(pid, file);
  const view = $("view");
  view.textContent = "Loading…";
  let parsed;
  try { parsed = await loadFile(pid, file); } catch (e) { view.textContent = "Failed to load: " + e.message; return; }
  let html;
  if (part && part.startsWith("e:")) {
    const s = parsed.sections[+part.slice(2)];
    html = crumb(p, f, s && s.h) + (s ? md(s.body) : "<p>Not found.</p>");
  } else if (part && part.startsWith("s:")) {
    const name = decodeURIComponent(part.slice(2));
    html = crumb(p, f, "schema " + name) + (parsed.schemas.has(name) ? md(parsed.schemas.get(name)) : "<p>Not found.</p>");
  } else {
    const secs = parsed.sections.map((s, i) => `<a href="#${pid}/${file}/e:${i}">${methodSpan(s.h)}</a>`).join("");
    const sch = [...parsed.schemas.keys()].map((n) => `<a href="#${pid}/${file}/s:${encodeURIComponent(n)}"><code>${esc(n)}</code></a>`).join("");
    html = crumb(p, f) + md(parsed.pre) +
      (secs ? `<h2>Endpoints and sections (${parsed.sections.length})</h2><div class="list">${secs}</div>` : "") +
      (sch ? `<h2>Schemas (${parsed.schemas.size})</h2><div class="list">${sch}</div>` : "");
  }
  view.innerHTML = html;
  linkSchemas(view, pid, file, parsed);
  window.scrollTo(0, 0);
}

function search(q) {
  const toks = q.toLowerCase().split(/\s+/);
  const hits = [];
  for (const p of INDEX.platforms) {
    for (const f of p.files) {
      const fl = (p.label + " " + f.title).toLowerCase();
      if (toks.every((t) => fl.includes(t))) hits.push({href: `#${p.id}/${f.file}`, t: f.title, p: p.label, area: true});
      f.sections.forEach((h, i) => {
        if (toks.every((t) => (fl + " " + h.toLowerCase()).includes(t)) && hits.length < 400)
          hits.push({href: `#${p.id}/${f.file}/e:${i}`, t: h, p: p.label + " / " + f.title});
      });
    }
  }
  $("view").innerHTML = `<h1>${hits.length}${hits.length >= 400 ? "+" : ""} results</h1><div class="list">` +
    hits.slice(0, 400).map((h) => `<a href="${h.href}" data-clear>${h.area ? "" : methodSpan(h.t)}${h.area ? esc(h.t) : ""}<small>${esc(h.p)}</small></a>`).join("") + "</div>";
  document.querySelectorAll("a[data-clear]").forEach((a) => a.addEventListener("click", () => { $("q").value = ""; }));
}

async function init() {
  try {
    const res = await fetch("ref/index.json");
    if (!res.ok) throw new Error(res.status);
    INDEX = await res.json();
  } catch (e) {
    $("view").textContent = "Failed to load ref/index.json: " + e.message + ". Run scripts/build_reference.py.";
    return;
  }
  $("q").addEventListener("input", route);
  window.addEventListener("hashchange", route);
  route();
}
init();

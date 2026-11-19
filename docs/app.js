const PLATFORMS = [
  {id: "odax", file: "data/facebook-odax.json", label: "Facebook ODAX"},
  {id: "legacy", file: "data/facebook-legacy.json", label: "Facebook Legacy"},
  {id: "chatgpt", file: "data/chatgpt-ads.json", label: "ChatGPT Ads"},
];
const $ = (id) => document.getElementById(id);
const key = (f, v) => f + "\u0000" + v;
let current;

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function buildTabs(active) {
  $("tabs").innerHTML = "";
  for (const p of PLATFORMS) {
    const b = document.createElement("button");
    b.textContent = p.label;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", p.id === active);
    b.onclick = () => { location.hash = p.id; };
    $("tabs").appendChild(b);
  }
}

// adjacency: node key -> {nodes:Set, combos:[combo]}
function buildGraph(data) {
  const adj = new Map();
  const touch = (k) => {
    if (!adj.has(k)) adj.set(k, {nodes: new Set(), combos: []});
    return adj.get(k);
  };
  const known = new Map(data.fields.map((f) => [f.id, new Set(f.values)]));
  for (const c of data.combos) {
    const ks = [];
    for (const [f, v] of Object.entries(c)) {
      if (f === "source") continue;
      if (!known.has(f) || !known.get(f).has(v)) console.warn("combo value not in field values:", f, v, c);
      ks.push(key(f, v));
    }
    for (const a of ks) {
      const n = touch(a);
      n.combos.push(c);
      for (const b of ks) if (a !== b) n.nodes.add(b);
    }
  }
  return adj;
}

function render(data) {
  const adj = buildGraph(data);
  const cols = $("columns");
  cols.innerHTML = "";
  for (const level of data.levels) {
    const col = document.createElement("section");
    col.className = "col";
    col.innerHTML = `<h2>${esc(level)}</h2>`;
    const fields = data.fields.filter((f) => f.level === level);
    if (!fields.length) col.insertAdjacentHTML("beforeend", `<p class="empty">No settings mapped.</p>`);
    for (const f of fields) {
      const wrap = document.createElement("div");
      wrap.className = "field";
      wrap.innerHTML = `<h3>${esc(f.id)}</h3>`;
      const chips = document.createElement("div");
      chips.className = "chips";
      for (const v of f.values) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "chip";
        b.dataset.k = key(f.id, v);
        b.textContent = v;
        const on = () => highlight(adj, b.dataset.k, f.id, v);
        b.addEventListener("mouseenter", on);
        b.addEventListener("focus", on);
        b.addEventListener("mouseleave", clear);
        b.addEventListener("blur", clear);
        chips.appendChild(b);
      }
      wrap.appendChild(chips);
      col.appendChild(wrap);
    }
    if (data.notes && data.notes[level]) {
      col.insertAdjacentHTML("beforeend", `<p class="note">${esc(data.notes[level])}</p>`);
    }
    cols.appendChild(col);
  }
}

function highlight(adj, k, f, v) {
  const node = adj.get(k) || {nodes: new Set(), combos: []};
  document.body.classList.add("hovering");
  document.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("self", c.dataset.k === k);
    c.classList.toggle("on", node.nodes.has(c.dataset.k));
  });
  const srcs = [...new Set(node.combos.map((c) => c.source))];
  $("info").innerHTML = srcs.length
    ? `<code>${esc(f)} = ${esc(v)}</code> — source: ${srcs.slice(0, 8).map((s) => `<code>${esc(s)}</code>`).join(", ")}${srcs.length > 8 ? ` +${srcs.length - 8} more` : ""}`
    : `<code>${esc(f)} = ${esc(v)}</code> — no documented links to other settings.`;
}

function clear() {
  document.body.classList.remove("hovering");
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on", "self"));
  $("info").textContent = "Hover a value to see the doc lines behind it.";
}

async function load() {
  const id = location.hash.slice(1) || PLATFORMS[0].id;
  const p = PLATFORMS.find((x) => x.id === id) || PLATFORMS[0];
  buildTabs(p.id);
  try {
    const res = await fetch(p.file);
    if (!res.ok) throw new Error(res.status);
    render(await res.json());
  } catch (e) {
    $("columns").textContent = "Failed to load " + p.file + ": " + e.message;
  }
}
window.addEventListener("hashchange", load);
load();

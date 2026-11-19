#!/usr/bin/env python3
"""Build the API reference browser data for docs/reference.html.

Copies each platform's markdown into docs/ref/<platform>/ (GitHub Pages serves only docs/)
and writes docs/ref/index.json (platforms -> files -> endpoint headings) used for search.

Run from the repo root: python3 scripts/build_reference.py
"""
import json
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "docs", "ref")

PLATFORMS = [
    ("ttd", "The Trade Desk"),
    ("googleads", "Google Ads"),
    ("googleshopping", "Google Shopping (Merchant API)"),
    ("gam", "Google Ad Manager"),
    ("dv360", "DV360 / Bid Manager"),
    ("pinterest", "Pinterest"),
    ("tiktok", "TikTok"),
    ("universalads", "Universal Ads"),
    ("facebook", "Facebook (Meta)"),
    ("chatgptads", "ChatGPT Ads"),
]


def parse(path):
    title, heads, in_fence = None, [], False
    with open(path, encoding="utf-8") as f:
        for line in f:
            if line.lstrip().startswith("```"):
                in_fence = not in_fence
                continue
            if in_fence:
                continue
            if title is None and line.startswith("# "):
                title = line[2:].strip()
            elif line.startswith("## "):
                h = line[3:].strip()
                if h and h != "Schemas":
                    heads.append(h)
    return title, heads


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)
    index = []
    for pid, label in PLATFORMS:
        src = os.path.join(ROOT, pid)
        if not os.path.isdir(src):
            continue
        dst = os.path.join(OUT, pid)
        os.makedirs(dst)
        files = []
        for name in sorted(os.listdir(src)):
            if not name.endswith(".md"):
                continue
            shutil.copyfile(os.path.join(src, name), os.path.join(dst, name))
            title, heads = parse(os.path.join(src, name))
            files.append({"file": name[:-3], "title": title or name[:-3], "sections": heads})
        index.append({"id": pid, "label": label, "files": files})
    with open(os.path.join(OUT, "index.json"), "w", encoding="utf-8") as f:
        json.dump({"platforms": index}, f, separators=(",", ":"))
    print("platforms:", len(index), "files:", sum(len(p["files"]) for p in index))


if __name__ == "__main__":
    main()

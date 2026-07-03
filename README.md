# curious96-site

This repository is the source for [**curious96.com**](https://www.curious96.com), the personal academic portfolio of Saumitra Phatak, a Physics Ph.D. candidate in Jonathan Hood's lab at Purdue University working on optical tweezers, single lithium/cesium atoms, laser cooling, and LiCs molecule assembly. It is a pure static HTML/CSS/JS site (no framework, no build step) with pages for research, publications, teaching, CV, side projects, and teaser links out to his essays and poetry, which are hosted on separate sibling sites. It began as a from-scratch rebuild that replaced an older Google Sites page and is now deployed live via GitHub Pages.

## Purpose

This site is the professional and intellectual home base for Saumitra Phatak:

- AMO physics research
- Publications
- Teaching and talks
- Personal essays
- Poetry
- CV and contact links

The separate project `https://amotoolkit.com` remains the AMO tools/calculators website.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

then visit:

```text
http://localhost:8000
```

No package manager, build step, or dependencies are required — every page is plain HTML/CSS/JS.

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch, root folder, with the
custom domain `www.curious96.com` configured through the `CNAME` file at the repo root.
Pushing to `main` updates the live site.

## Editing content

For conventions on adding a new publication, essay/poem teaser, or CV update, see
[`CLAUDE.md`](./CLAUDE.md) — it documents the full directory structure and the exact
steps to follow so new content matches the existing site.

# CLAUDE.md

Guidance for Claude Code (or any future editor, human or AI) working in this repository.

## What this project is

This is the source for **curious96.com** — the personal academic portfolio of
**Saumitra Phatak**, a Physics Ph.D. candidate in Jonathan Hood's lab at Purdue
University (AMO physics: optical tweezers, single lithium-6 and cesium-133 atoms,
laser cooling, and LiCs molecule assembly).

It is a **from-scratch static rebuild** replacing an older Google Sites page (migration
notes are preserved in `content/current-google-site-migration.md`). The site is the
public home base for his research identity, publications, CV, teaching record,
side projects, and links out to his writing and poetry (which live in separate repos).

- **Live URL:** `https://www.curious96.com` (confirmed via `CNAME` file, which
  contains `www.curious96.com`)
- **Deployment:** GitHub Pages, served from `main` branch / root, with the custom
  domain in `CNAME`.
- **Owner:** Saumitra Phatak (`saumitraphatak` on GitHub)

## Tech stack

- Pure static **HTML/CSS/JS** — no framework, no npm, no build step, nothing to
  compile. This is intentional (see the "Philosophy" section on `projects.html`).
- Google Fonts via CDN: IBM Plex Sans (body/UI), Space Grotesk (headings/nav),
  Noto Serif Devanagari (Hindi/Marathi poem text).
- Google Analytics (gtag.js, `G-5DGRCQ7X4Q`) is inlined in the `<head>` of every page.
- No JS framework and no bundler — `js/main.js` is loaded directly via `<script>`.
- Local preview: open `index.html` directly, or run `python3 -m http.server 8000`
  and visit `http://localhost:8000`.

## Directory / file structure

```
curious96-site/
├── CNAME                    # GitHub Pages custom domain -> www.curious96.com
├── robots.txt                # allow-all + sitemap pointer
├── sitemap.xml                # manual sitemap; UPDATE when pages are added/removed
├── favicon.svg
├── index.html                 # Home page: hero, research highlights, "beyond the lab" grid
├── research.html              # Research narrative: lithium / theory / cesium / LiCs timeline
├── publications.html          # Paper cards (DOI + arXiv links) — see "Adding a publication" below
├── teaching.html               # TA work, AMO mini-course, mentorship, recorded talks
├── projects.html                # Cards linking out to the 4 side projects (see below)
├── writing.html                  # Index/teaser of essays that live on the Curious Writings site
├── poetry.html                    # Index/teaser of poems that live on the Siyahi site
├── cv.html                          # Web CV (education, skills, awards, achievements, talks) + PDF download
├── contact.html                      # Contact links grid (email, Scholar, GitHub, LinkedIn, etc.)
├── css/styles.css                     # Single shared stylesheet, CSS custom properties, all components
├── js/main.js                          # Shared JS: nav toggle, active-link highlight, footer year,
│                                          scroll-reveal IntersectionObserver, poetry language filter
├── assets/
│   ├── Saumitra_Phatak_CV.pdf          # Linked from cv.html and contact.html — replace in place to update
│   └── saumitra.jpg                    # Profile photo used on index.html and contact.html
├── content/
│   └── current-google-site-migration.md  # Historical migration notes from the old Google Sites version
│                                          (source-of-truth reference for original content; not built/served)
├── writing/                            # Currently empty — essay content lives in the separate
│                                          `curious-writings` repo/site, not here
├── poetry/                             # Currently empty — poem content lives in the separate
│                                          `siyahi-poetry` repo/site, not here
├── PROJECT_CONTEXT.md                  # Older human-written context doc; kept for history, largely
│                                          superseded by this CLAUDE.md
└── README.md                           # Top-level project description + local usage
```

## Ecosystem: related sibling sites

`curious96.com` is the hub; it links out to sibling projects rather than hosting their
content directly:

| Project | URL | Content lives in |
|---|---|---|
| AMO Toolkit | `https://amotoolkit.com` | separate repo (`amo-career`), 12+ physics calculators/tools |
| Siyahi (poetry) | `https://saumitraphatak.github.io/siyahi-poetry/` | separate repo `siyahi-poetry` |
| Curious Writings (essays) | `https://saumitraphatak.github.io/curious-writings/` | separate repo `curious-writings` |
| RealWorld Academy | `https://saumitraphatak.github.io/realworld-academy/` | separate repo `realworld-academy` |

`writing.html` and `poetry.html` on this site only show a **curated teaser** (a handful
of essays / poems) with a link to "see all" on the sibling site. Do not try to build out
a full CMS here — new full essays/poems belong in those other repos.

## Key conventions

- **Every page repeats the same `<head>` boilerplate**: gtag snippet, charset/viewport
  meta, `<title>`, meta description, `rel="canonical"` (absolute URL under
  `https://www.curious96.com/...`), Open Graph tags (on `index.html`), favicon link,
  Google Fonts preconnect + stylesheet link, and `css/styles.css`. When adding a new
  page, copy this block from an existing page rather than writing it from scratch, and
  update the `<title>`, meta description, and canonical URL.
- **Every page repeats the same header/nav markup** (`.site-header` > `.brand` +
  `.nav-toggle` + `.site-nav` with links to research/publications/teaching/projects/
  writing/cv/contact). If you add or remove a nav item, update it **in every HTML file**
  — there is no shared include/templating system.
- **Every page ends with the same footer pattern**: `<footer class="site-footer">` with
  a `©` + `<span data-year>` (auto-filled by `js/main.js`) and a few contextual links.
- `js/main.js` is shared across all pages and handles:
  - mobile nav toggle (`.nav-toggle` click -> `.site-nav.open`)
  - auto-filling `data-year` spans with the current year
  - highlighting the active nav link by comparing `location.pathname` to each link's `href`
  - scroll-reveal animations via `IntersectionObserver` on any element with class `.reveal`
  - the poetry language filter buttons (`.filter-btn[data-lang]`) on `poetry.html`
- **Styling is one file** (`css/styles.css`) using CSS custom properties defined in
  `:root` (`--bg`, `--text`, `--accent`, `--card`, `--line`, `--radius`, `--max`, etc.).
  Reuse existing component classes (`.button`, `.tag`, `.card-grid`, `.info-card`,
  `.project-card`, `.pf-card`, `.timeline-item`, `.cv-block`, `.writing-card`,
  `.pub-card`, `.contact-card`, `.poem-card`, `.glass-card`) instead of inventing new
  ad hoc classes for pages that resemble existing ones.
- Internal links are relative (`research.html`, `assets/...`); external links always use
  `target="_blank" rel="noopener"`.
- No package manager, no linter, no build/test pipeline — validate changes by opening
  the HTML file(s) directly in a browser or via `python3 -m http.server`.

## How to update content

### Add a new publication (`publications.html`)

Publications are hand-written `<article class="pub-card">` blocks inside the single
`<section class="section">` in `publications.html`, newest first. Copy an existing
`<article>` and update:

```html
<article class="pub-card">
  <span class="tag">JOURNAL YEAR · role</span>
  <h2>Full paper title</h2>
  <p class="meta-row">Author list, bold/asterisk convention matching co-first authors</p>
  <p>One or two sentence plain-language summary of the contribution.</p>
  <div class="pub-links">
    <a href="DOI_URL" target="_blank" rel="noopener">DOI</a>
    <a href="ARXIV_URL" target="_blank" rel="noopener">arXiv</a>
  </div>
</article>
```

Also consider: updating `research.html` if the paper represents a new research
milestone, updating `cv.html`'s "Selected achievements" timeline, and bumping the
publications count/summary text on `index.html` if referenced.

### Add a new blog/essay entry (`writing.html`)

Full essay text is **not** hosted in this repo — it lives at
`https://saumitraphatak.github.io/curious-writings/`. This repo only shows a teaser
list. To add a new essay to the teaser:

1. Publish the full essay in the `curious-writings` repo first.
2. Add a new `<a class="writing-card" href="...articles/NN-slug.html" target="_blank" rel="noopener">`
   block to `writing.html`, following the numbered filename convention already in use
   (`01-...html`, `02-...html`, etc.), with a short title/teaser `<p>` and a
   `<span class="lang-pill">` (`essay`, `Marathi`, `science`, `travel`, etc.).
3. Update the essay count mentioned in the `writing.html` lead paragraph and on
   `index.html` / `projects.html` if they cite a specific number.

### Add/update poems (`poetry.html`)

Same pattern as writing: the full 104-poem archive lives at
`https://saumitraphatak.github.io/siyahi-poetry/`. This page shows 5 selected poems.
To feature a different/new poem, copy an existing `<div class="glass-card poem-card"
data-lang="hindi|marathi|english">` block and fill in the Devanagari or English text,
`poem-lang-pill`, and a one-line `poem-meaning-note`. The `data-lang` attribute drives
the JS filter buttons in `js/main.js`.

### Update the CV

- Replace `assets/Saumitra_Phatak_CV.pdf` in place (same filename) so the existing
  download links on `cv.html` and `contact.html` keep working.
- Mirror any major changes (new award, new achievement) into the web CV sections in
  `cv.html` (`.cv-edu`, `.award-list`, `.timeline`) so the page stays in sync with the PDF.

### Add a brand-new page

1. Copy the closest existing page as a template (matching `<head>` boilerplate, header,
   nav, footer, and `js/main.js` include).
2. Add a nav link to it in the `.site-nav` block of **every** HTML file.
3. Add it to `sitemap.xml` with an appropriate `<priority>`.
4. Give it a unique `<title>`, meta description, and `rel="canonical"` URL.

## Things to avoid

- Don't introduce a JS framework, bundler, or npm dependency — the whole point of this
  and sibling sites is zero build tooling.
- Don't add real essay/poem content directly into this repo's `writing/` or `poetry/`
  folders (currently empty) — that content belongs in the sibling repos.
- Don't forget: there is no shared HTML partial/include system, so nav/header/footer
  edits must be applied to every page file manually.

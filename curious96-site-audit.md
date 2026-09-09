# curious96.com — Site Audit

**Repo:** `curious96-site` (local: `Documents/GitHub/curious96-site`, GitHub: `saumitraphatak/curious96-site`)
**Live site:** https://www.curious96.com
**Stack:** static HTML/CSS/JS, no build step, deployed via GitHub Pages
**Audit date:** September 2026
**Repo state at audit time:** working tree clean, in sync with `origin/main`, last commit July 9, 2026

The repo and the live site were compared directly (fetched `/` and `/projects.html` live) and match — there is no deployment drift; whatever is committed to `main` is what's live.

---

## 1. Highest-value fixes

These are small, concrete, and worth doing first.

**Sitemap is missing a page.** `sitemap.xml` lists 8 URLs but not `projects.html`, even though the file exists, is linked from the nav on every page, and `CLAUDE.md` itself documents "add it to `sitemap.xml`" as a required step when adding a page. This looks like exactly the maintenance gap the repo's own docs warn about — `projects.html` was added after the sitemap was last touched. One line to fix in `sitemap.xml`.

**Accessibility attributes only exist on the homepage.** Three attributes were added to `index.html` at some point and never propagated to the other 8 pages, even though `CLAUDE.md` says new pages should be copied from an existing page:
- `<nav class="site-nav" aria-label="Main navigation">` — present only on `index.html`; the other 8 pages have plain `<nav class="site-nav">`.
- `<button class="nav-toggle" aria-label="Toggle navigation">` — present only on `index.html`; the other 8 pages have `<button class="nav-toggle">Menu</button>` with no accessible label (a screen reader announces it only as "Menu button," which is fine, but it's inconsistent and the toggle also never sets `aria-expanded`, so no page tells assistive tech whether the mobile menu is open or closed).
- `<main id="main">` — present only on `index.html`. Moot right now since there's no "skip to content" link anywhere pointing at it, but worth fixing both at once (see below).

**One broken convention, one page.** `CLAUDE.md` states "external links always use `target=\"_blank\" rel=\"noopener\"\"` — and every external link on the site follows that rule except one: the "AMO Toolkit" link in `research.html`'s footer, which is a bare `<a href="https://amotoolkit.com">` with no `target`/`rel`. Every other footer across the 9 pages does this correctly.

**No Open Graph tags outside the homepage.** `index.html` has `og:title`, `og:description`, `og:type`, `og:url` — the other 8 pages (including `research.html` and `publications.html`, the pages most likely to get shared individually when a paper comes out) have none. A link to `/publications.html` shared on Slack, LinkedIn, or X will show a bare title/URL with no preview card. There's also no `og:image` or Twitter Card meta anywhere on the site, so even the homepage's social preview has no image.

## 2. SEO & discoverability

- `robots.txt` and `sitemap.xml` are both present and correctly configured (allow-all, sitemap pointer); the sitemap priorities are sensible. The one gap is the missing `projects.html` entry noted above.
- Every page has a unique `<title>`, meta description, and absolute `rel="canonical"` URL — this is done consistently and correctly across all 9 pages.
- No structured data (JSON-LD). For an academic portfolio, a `Person` schema (name, affiliation, sameAs linking to Google Scholar/GitHub/LinkedIn) and/or `ScholarlyArticle` entries for the publications would help Google understand the page and could surface richer results — not urgent, but a genuine gap for this kind of site.
- No `og:image`/`twitter:image` anywhere (see above) — for a site whose main "distribution" channel is likely link-sharing (a new paper, a new essay), this is probably the single highest-leverage SEO/social fix available.
- Meta descriptions are all reasonable length, with the homepage's running slightly long (~168 characters vs. the ~155–160 Google typically displays) — very minor, not worth a special trip.

## 3. Accessibility

- Color contrast is genuinely good. I computed WCAG contrast ratios for the site's actual palette against its dark background (`#081016`): body text `#eef7f5` → 17.6:1, muted/secondary text `#9fb2b0` → 8.6:1, the teal accent `#7de2d1` → 12.5:1, the gold accent `#ffc857` → 12.5:1. All comfortably clear AA (4.5:1) and in fact clear AAA (7:1) for normal text. This is a real strength, not a rubber-stamp pass.
- `:focus-visible` outlines are defined for both links and buttons (`outline: 2px solid var(--accent)`), so keyboard navigation has a visible focus indicator site-wide — another genuine strength.
- Devanagari poem text on `poetry.html` (Hindi and Marathi verses) has no `lang="hi"` / `lang="mr"` attribute on the containing elements — the whole document declares `lang="en"`, so a screen reader will try to read Hindi/Marathi script with English pronunciation rules. This is the one real accessibility gap on that page (WCAG 3.1.2, Language of Parts); the `data-lang` attributes used for the JS filter buttons are a separate mechanism and don't help here.
- No skip-to-content link on any page. Combined with the repeated 7-link nav + brand + toggle button at the top of every page, a keyboard or screen-reader user has to tab through the same header on every single page load before reaching page content.
- The mobile nav toggle doesn't manage `aria-expanded`, so assistive tech has no programmatic way to know whether the mobile menu is currently open (see §1).
- Both `<img>` elements on the site (`assets/saumitra.jpg`, used on the homepage and contact page) have good descriptive `alt` text, which is correct and worth keeping.

## 4. Content & code consistency

- `CLAUDE.md` and `PROJECT_CONTEXT.md` are both excellent, thorough documentation of the site's structure and conventions — genuinely above-average project hygiene for a personal site. The audit above is really just "here's where the live code has drifted from what those docs promise."
- The lack of any shared include/templating system (explicitly a deliberate choice, per `CLAUDE.md`) is the direct cause of nearly every consistency bug above — nav, header, footer, and `<head>` boilerplate are manually duplicated across 9 files, and it shows exactly where a page was updated once and the change wasn't fanned out. Given the "no build step" philosophy is intentional, the fix isn't to add a bundler — it's a lightweight one-time pass to re-sync all 9 `<head>`/nav/footer blocks against `index.html`'s copy, followed by a periodic diff check.
- `cv.html` lists "2021 – 2026 · Physics Ph.D. candidate," and `publications.html` already lists the dissertation itself as a fully published 2026 output on Purdue Hammer. Worth a quick check that "candidate" (vs. an updated status/graduation date) still matches where things actually stand — this is the kind of thing that's easy to leave stale once the CV PDF gets updated but the web CV text doesn't.
- Fonts: every page loads three Google Font families (IBM Plex Sans, Space Grotesk, and Noto Serif Devanagari), but Noto Serif Devanagari is only actually used on `poetry.html`. The other 8 pages pay the download/render cost of a font family they never display — small, but a real and easy performance win since the `<link>` tag is identical across all 9 pages and just needs a one-line trim outside `poetry.html`.
- Neither `<img>` tag has explicit `width`/`height` attributes, so the browser can't reserve layout space before CSS loads (a minor CLS/layout-shift risk). CSS does fix both images' dimensions, so the practical impact is small, but adding the attributes is a one-line-per-image fix with no downside.
- No custom `404.html` for GitHub Pages — a mistyped or stale URL falls through to GitHub's generic 404 rather than a branded one with a link back to the homepage. Low priority, easy to add.

## 5. External links

Spot-checked rather than exhaustively crawled (9 pages, ~20 outbound links):
- The DOI link for the 2025 PRA paper resolves correctly (redirects to `journals.aps.org`, confirmed matching title/authors/issue).
- `hoodlabpurdue.com` (advisor's lab site) loads fine and is current (site shows August 2026 updates).
- The Purdue Hammer thesis link (`hammer.purdue.edu/articles/thesis/...`) returned a 403 to my automated fetch — this reads like bot/anti-scraping protection on Purdue's repository platform rather than a genuinely broken link (the DOI-based links on the same page fetched normally), but since I can't fully confirm it's fine, it's worth a manual click to be sure, especially since it's the link to your own dissertation.
- YouTube, Google Scholar, LinkedIn, GitHub, and Instagram links were not individually re-verified beyond checking they're well-formed and use the correct handles already recorded in the repo's own docs.

## 6. Performance

- The site is about as light as a site can be: `index.html` is 8.4 KB, the shared `css/styles.css` is 20 KB, `js/main.js` is 1.2 KB, no JS framework, no bundler. This is a genuine strength and the main reason the font-loading point above is the only real performance note — there's very little else to optimize.
- Google Analytics (`gtag.js`) is loaded via `async` on every page, so it isn't blocking render; it's just placed before `<meta charset>` in the `<head>`, which technically violates the "charset must be within the first 1024 bytes / before anything but the title" best practice. Browsers handle this fine in practice; it's a validator nitpick, not a real-world problem.
- No image format modernization (the profile photo is a 195 KB JPEG) — trivial at this size, not worth a special pass given the overall page weight is already excellent.

---

## Summary punch list

| Priority | Item | Where |
|---|---|---|
| High | Add `projects.html` to `sitemap.xml` | `sitemap.xml` |
| High | Add `og:image`/Open Graph tags to all pages (and a `og:image`/`twitter:image` everywhere, including the homepage) | all 9 HTML files |
| Medium | Fix the one footer link missing `target="_blank" rel="noopener"` | `research.html` |
| Medium | Propagate `aria-label`s (`site-nav`, `nav-toggle`) and `id="main"` from `index.html` to the other 8 pages; add a skip-to-content link | all 9 HTML files |
| Medium | Add `aria-expanded` toggling to the mobile nav button | `js/main.js` |
| Low | Add `lang="hi"`/`lang="mr"` to Devanagari poem elements | `poetry.html` |
| Low | Drop the unused Noto Serif Devanagari font load from the 8 non-poetry pages | all pages except `poetry.html` |
| Low | Add `width`/`height` to the two `<img>` tags | `index.html`, `contact.html` |
| Low | Add a custom `404.html` | new file |
| Worth a look | Confirm "Ph.D. candidate" / 2021–2026 dates on `cv.html` still match your actual status | `cv.html` |
| Worth a look | Manually confirm the Purdue Hammer thesis link still opens (automated check got a 403, likely bot-blocked) | `publications.html`, `cv.html` |

Nothing here is structural — the site is clean, fast, well-documented for future editing, and has genuinely strong contrast/focus-state accessibility fundamentals. Everything above falls out of the same root cause: 9 hand-duplicated HTML files with no shared template, so a change made on one page doesn't always make it to the other 8.

---

## Maintenance Log

### 2026-09-08

Orientation: `git status` was clean at session start; working tree in sync, no local uncommitted work to avoid. (Note: a stale, empty `.git/index.lock` was left behind by a read-only `git status` call in this automated session and could not be removed — this sandbox's shell cannot delete files. If a future `git add`/`git commit` fails with "Unable to create '.git/index.lock': File exists," delete that one file manually and retry.)

Checked the "Highest-value fixes" from the September 2026 audit above — all four were already applied (as of commit `0a3cd78`, dated 2026-09-07): `projects.html` is in `sitemap.xml`; `aria-label`/`aria-expanded`/`id="main"`/skip-link are present on all 9 pages; the `research.html` footer AMO Toolkit link has `target="_blank" rel="noopener"`; and Open Graph/Twitter Card tags (including `og:image`) are on every page. Most of the "Low priority" items were also already done (poem `lang="hi"`/`lang="mr"` attributes, `width`/`height` on both `<img>` tags, custom `404.html`, unused Devanagari font trimmed to `poetry.html` only). The Ph.D.-candidate → Ph.D.-complete correction on `cv.html`/`index.html` was also already made (commit `a417463`).

Fresh pass this session:
- **Internal links & anchors:** every relative `.html` href across all 10 pages resolves to a real file; every in-page `#anchor` href resolves to a matching `id`. No breakage found.
- **External links spot-checked:** all 12 `curious-writings` essay links, `siyahi-poetry`, `realworld-academy`, `hoodlabpurdue.com`, `amotoolkit.com`, and the PRA DOI (`10.1103/vr4g-h995`, resolves correctly to the Blodgett/Phatak et al. paper) all load successfully. Google Scholar and LinkedIn can't be checked by automated fetch (blocked by their own `robots.txt`) — not evidence of breakage, just untestable this way. The Purdue Hammer thesis link still 403s to automated fetch, same as the September audit found — still reads as bot-blocking rather than a real break, but still worth a manual click since it's your own dissertation link.
- **Stale-content fix:** the poem count was out of date in 6 places — `poetry.html` (×3), `projects.html`, and `CLAUDE.md` still said "104 poems," but the live Siyahi site now states 108. Updated all 6 to 108. (`index.html` already said 108 — only it had been kept in sync.)
- **Stale-doc fix:** `CLAUDE.md` and `README.md` still described you as "a Physics Ph.D. candidate" even though `cv.html`/`index.html` were already updated to reflect the completed Ph.D. Reworded both to "who recently completed his Physics Ph.D." for consistency. (These are internal repo docs, not published site content.)
- Cross-checked the homepage stat strip against source pages: publications (4), essays (12), and open-source projects (4) all match actual counts. Left the "14 AMO Toolkit calculators" stat alone — verifying it would mean auditing the sibling `amotoolkit.com` site, which is out of scope here (and has its own maintenance task).

**Not touched / flagged for you, not fixed:**
- No mention anywhere on the site of your current role (Quantum Engineer at Atom Computing, Boulder, CO) — the bio just says you "recently completed" your Ph.D., with no post-Ph.D. role or location. Didn't add this myself since it's a content/voice decision (hero copy, CV, "now" strip) rather than a mechanical fix — let me know if you'd like it added and where.
- Homepage meta description (`index.html`) is 182 characters, above the ~155–160 Google typically displays — grew slightly with the Ph.D.-completion edit. Minor; flagging rather than trimming your wording myself.
- Structured data (`Person`/`ScholarlyArticle` JSON-LD beyond the existing homepage block) and the Purdue Hammer link manual check remain open from the original audit, still low priority.

No commits made (read-only git use, per policy). All edits above are plain-text/number corrections; no markup structure was touched.

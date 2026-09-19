# curious96.com — Maintenance Log

Running log for the daily automated maintenance task on this repo. See
`curious96-site-audit.md` (repo root) for the original September 2026 audit
this task started from. New dated entries go here rather than in that file,
starting 2026-09-09, so this log never collides with locally-modified files
left over from a previous run (see note below).

---

### 2026-09-09

**Orientation:** `git status` at session start showed five files already
modified and uncommitted from the prior day's run (2026-09-08), never
committed since this task is read-only on git by design: `CLAUDE.md`,
`README.md`, `curious96-site-audit.md`, `poetry.html`, `projects.html`. Per
policy ("never touch a file `git status` shows as already locally
modified"), none of these five were touched today, even though their
pending changes (poem count 104→108, Ph.D.-candidate→Ph.D.-complete wording)
looked correct on inspection. **Flag for Saumitra:** these five files have
uncommitted local changes from 2026-09-08 sitting in your working tree —
worth reviewing and committing (or discarding) yourself, since this
automation will keep leaving them alone indefinitely otherwise, and every
future run will keep being unable to touch them until they're resolved.

Confirmed via the existing audit file (read-only) that all four
"Highest-value fixes" and nearly all "Low priority" items from the original
September 2026 audit were already applied as of prior sessions — nothing
new to do there.

**Fresh pass this session:**
- Ran an HTML tag-balance check (Python `html.parser`) across all 10 pages
  (including the 5 locked ones, read-only) — no unclosed or mismatched
  tags anywhere.
- Re-grepped the whole site for stale "104" poem-count and "Ph.D. candidate"
  references — none remain outside the 5 locked files, where the pending
  (uncommitted) edits already fix them.
- Verified externally that the live Siyahi site does say 108 poems, confirming
  yesterday's not-yet-committed 104→108 edits are accurate.
- Checked meta-description lengths on all 10 pages: only `index.html` is
  long (182 characters, flagged previously — still just flagging, not
  rewriting your homepage copy).
- Confirmed `og:image`/Open Graph/Twitter Card tags are present on all pages
  except `404.html` (expected/fine — no page needs a social preview).
- Confirmed structured data (JSON-LD `Person` schema) still exists only on
  `index.html`; still low priority per the original audit, not added
  elsewhere today (keeping today's scope small).
- Content fix (`writing.html`): the closing paragraph said essays "can be
  filtered by topic: PhD life, journey, travel, philosophy, personal
  growth, science, and Marathi" — but the actual filter buttons on the page
  are only journey/travel/philosophy/personal-growth/science/marathi (6,
  matching the page's own "Twelve essays, six threads" heading). "PhD life"
  isn't a real filter and doesn't match any `data-topic`. Removed it so the
  sentence matches the actual site behavior. Purely a factual/descriptive
  fix, no voice or substance changed.
- Spot-checked external links: live Siyahi site (108 poems, confirmed
  above), `hoodlabpurdue.com` (loads fine, actively updated). The Purdue
  Hammer thesis link again returned a 403 to automated fetch — same as
  every previous check; still reads as bot-blocking, not a real break, but
  still worth your own manual click since it's your dissertation link.
  `amotoolkit.com` returned only header metadata to the fetch tool (likely
  a JS-rendered app) — inconclusive either way, not flagging as broken.

**Not touched / flagged for you, not fixed (carried over from prior audit,
still open):**
- No mention anywhere on the site of your current role (Quantum Engineer at
  Atom Computing, Boulder, CO) — still just the "recently completed" Ph.D.
  framing, no post-Ph.D. role/location. Still a content/voice decision, not
  mine to make.
- `contact.html`'s only listed email is `phataks@purdue.edu` — now that
  you've completed the Ph.D., worth double-checking that's still the
  address you want listed as your primary contact (I don't know your
  current preferred contact address, so not changing this).
- Homepage meta description length (182 chars) — still just flagging.
- Structured data beyond the homepage `Person` block, and the Purdue Hammer
  manual link check — both still open, still low priority.
- Publications page has inconsistent title-casing style across the four
  paper `<h2>` headings (one is full sentence case, one is correct title
  case, two capitalize extra minor words like "And"/"Of"/"With"/"In An").
  Flagging rather than touching since these are quoted paper titles and I
  didn't want to guess at your intended house style without asking.

No git commits made (read-only git policy). Only change made was the
one-line `writing.html` text fix described above.

### 2026-09-18

**Orientation:** No entries in this log between 2026-09-09 and today — this
scheduled task apparently didn't run (or didn't reach the point of logging)
for 9 days. `git status` at session start was clean, in sync with
`origin/main`; the last commit (`fe102b5`, 2026-09-08) evidently picked up
the five files that were flagged as locally-modified-and-uncommitted in the
2026-09-09 entry (104→108 poem count, Ph.D.-candidate→Ph.D.-complete
wording) — confirmed no stale "104" or "Ph.D. candidate" text remains
anywhere in the repo. Nothing else changed hands since 09-09 (only one
commit total since then, and it's the one already accounted for).

Re-confirmed all "Highest-value fixes" and "Low priority" items from the
original September 2026 audit remain applied (sitemap, ARIA/skip-link,
research.html footer link, OG/Twitter tags, poem `lang` attributes,
img `width`/`height`, custom 404, trimmed Devanagari font load) — no
regressions.

**Fresh pass this session:**
- Full HTML tag-balance check (Python `html.parser`) across all 10 pages —
  clean, no unclosed/mismatched tags.
- Full internal link/anchor/asset-reference check (every `href`/`src` across
  all 10 pages resolved programmatically against the filesystem and each
  target's `id` attributes) — zero broken internal links, zero dangling
  in-page anchors, all asset paths (CSS/JS/images) exist.
- Scanned all visible text for common typo patterns and duplicated words —
  none found.
- Re-checked meta description lengths on all 10 pages — only `index.html`
  is over the ~155–160 char guideline (182 chars, unchanged from prior
  audits); still just flagging, not rewriting homepage copy.
- Grepped for current-role mentions (Atom Computing / Boulder / Quantum
  Engineer) — still absent site-wide; this remains an open content
  decision, not touched (see below).
- External link spot-check: `github.com/saumitraphatak` (loads, 6 repos,
  matches expected username) and `hoodlabpurdue.com` (loads, actively
  updated — news feed includes a September 10, 2026 entry) both confirmed
  healthy. `amotoolkit.com` loads but its content is JS-rendered, so the
  fetch tool could only confirm it responds, not read the page (same
  inconclusive-but-not-broken result as prior audits). The APS DOI link
  (`doi.org/10.1103/vr4g-h995`) and the Purdue Hammer thesis link both
  403'd to automated fetch again — consistent with every previous check;
  still reads as bot-blocking on their end, not a real break, but still
  worth Saumitra's own manual click on the thesis link since it's his
  dissertation. YouTube links (`P1ktqTUEkSI`, `h3b_7vSZtys`, `xGwd_TUaHRE`)
  returned 429 (rate-limited) on repeated attempts — untestable this way,
  not evidence of breakage; not worth burning more fetches on retries per
  the "avoid rabbit holes" guidance.
- Looked more closely at the publications.html title-casing question
  flagged on 2026-09-09: confirmed via web search that the two headings
  using full title-case (the 2025 PRA Cs-cooling paper and the 2023 PRL
  Li-imaging paper) exactly match those papers' **arXiv preprint** listing
  titles, while the 2024 PRA theory paper's heading (sentence case, no
  leading "A") matches that paper's **published-journal** title exactly
  (its arXiv title has a leading "A Generalized..."). So each heading is a
  verbatim, correct title from a real source — the "inconsistency" is
  arXiv-style vs. journal-style capitalization, not a typo — and BibTeX
  blocks already use journal-style sentence case for all four. Still not
  changing this myself: picking one convention (arXiv-style headings vs.
  journal-style headings) is a house-style call, not a mechanical fix.
  Flagging with the specifics above in case Saumitra wants one style
  applied consistently to the four `<h2>`s.

**Not touched / flagged for you, not fixed (all carried over, still open):**
- No mention anywhere on the site of your current role (Quantum Engineer at
  Atom Computing, Boulder, CO) — still just "recently completed his Ph.D.",
  no post-Ph.D. role/location. Still a content/voice decision.
- `contact.html`'s only listed email is still `phataks@purdue.edu` — worth
  confirming that's still your intended primary contact post-Ph.D.
- Homepage meta description (182 chars, over the ~155–160 guideline) —
  still flagging, not rewriting your copy.
- Publications page `<h2>` title-casing (arXiv-style vs. journal-style,
  detailed above) — still flagging, not picking a house style for you.
- Structured data (`Person`/`ScholarlyArticle` JSON-LD beyond the existing
  homepage `Person` block) — still low priority, not added.
- Purdue Hammer thesis link manual check — still recommend your own click,
  automated fetch still blocked.

No git commits made (read-only git policy). No files were edited this
session — everything checked out clean, so there was nothing safe and
mechanical left to fix today.

### 2026-09-19

**Orientation:** `git status` at session start showed only `docs/audit-log.md`
locally modified — that's this log's own uncommitted 09-18 entry, carried
over untouched since this task never commits. No new commits since `fe102b5`
(2026-09-08); confirmed via `git log` there's nothing to re-sync on. Verified
the four "Highest-value fixes" from the original audit are all still in
place (checked directly, not just via this log): `projects.html` is in
`sitemap.xml`; `aria-label`/`aria-expanded`/skip-link/`id="main"` present on
all 9 content pages; the `research.html` footer "AMO Toolkit" link carries
`target="_blank" rel="noopener"`; every page has an `og:image` tag. Also
re-checked for regressions: no "Ph.D. candidate" or stale "104 poem(s)"
phrasing anywhere, `<html lang="en">` consistent on all 10 pages, no `<img>`
missing `alt`, and CSS/JS cache-busting query strings (`?v=20260908`) match
across all 10 pages.

**Fresh pass this session — structured data:** The original audit's
low-priority item "add structured data (JSON-LD) beyond the homepage
`Person` block" was still open after 09-09 and 09-18 (flagged both times,
never implemented). Implemented it today on `publications.html`: added a
`@graph` JSON-LD block (`Thesis` for the PhD dissertation, `ScholarlyArticle`
for the three papers) directly before `</head>`, matching the block style
already used on `index.html`. Every field (title, author list/order, year,
journal, DOI, arXiv URL) was copied verbatim from that page's own existing
`<h2>`/meta-row/BibTeX content already on the page — no new facts
introduced, no visible content or prose touched. Validated the JSON parses
correctly (`json.loads`) and re-ran the full HTML tag-balance checker on the
file afterward — clean, no unclosed/mismatched tags. `git diff` confirms the
change is scoped to exactly this one `<script type="application/ld+json">`
insertion.

**Not touched / flagged for you, not fixed (all carried over, still open):**
- No mention anywhere on the site of your current role (Quantum Engineer at
  Atom Computing, Boulder, CO) — `index.html`'s own JSON-LD still lists
  `jobTitle: "AMO Physicist"` with Purdue as the sole affiliation. Still a
  content/voice decision I'm not making unilaterally.
- `contact.html`'s only listed email is still `phataks@purdue.edu` — worth
  confirming that's still your intended primary contact post-Ph.D.
- Homepage meta description (182 chars, over the ~155–160 guideline) —
  still flagging, not rewriting your copy.
- Publications page `<h2>` title-casing (arXiv-style vs. journal-style,
  detailed in the 09-18 entry) — still flagging, not picking a house style
  for you.
- Purdue Hammer thesis link and the APS DOI link still return
  403/bot-blocked to automated fetch tools in every check so far — still
  recommend your own manual click, not evidence of an actual break.

No git commits made (read-only git policy). One file edited this session:
`publications.html` (JSON-LD addition described above).

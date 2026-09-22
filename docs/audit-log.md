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

### 2026-09-20

**Orientation:** `git status` at session start was clean, in sync with
`origin/main` — no locally-modified files to avoid today (unlike some prior
runs). Last commit still `5f80c8a`, nothing new since 2026-09-19. Re-verified
the four original "Highest-value fixes" and the low-priority items are all
still in place (sitemap includes `projects.html`; ARIA/skip-link/`id="main"`
on all 9 content pages; `research.html` footer link has `target`/`rel`;
`og:image`/Twitter Card on every page except `404.html`, which doesn't need
one; poem `lang="hi"`/`lang="mr"` attributes; `width`/`height` on both
`<img>` tags; Devanagari font scoped to `poetry.html` only) — no regressions.

**Fresh pass this session — ran a broader mechanical-check script** (Python,
read-only) across all 10 pages, checking: HTML tag balance, heading-level
hierarchy (h1 count + skipped levels), duplicate `id` attributes, every
external `<a>` for `target="_blank" rel="noopener"`, stale-phrase regression
("Ph.D. candidate", "104 poems"), current-role mentions, meta description
length, and OG/Twitter tag presence. Results: tag balance clean, zero
duplicate ids, zero external links missing target/rel, zero stale phrases,
CSS/JS cache-busting version strings (`?v=20260908`) consistent across all
10 pages, `writing.html`'s topic-filter sentence still correctly says six
threads (the "PhD life" mismatch fixed 2026-09-09 hasn't regressed).

**New finding (flagged, not fixed) — heading hierarchy skip on two pages:**
`contact.html` and the first `<section>` of `teaching.html` jump straight
from `<h1>` to `<h3>` with no intervening `<h2>`, unlike every other page's
h1→h2→h3 pattern (e.g. `index.html`'s own `info-card` grid has an h2
"Tools, teaching, writing, and projects" heading before its h3 cards, and
`projects.html` has h2 "Four projects, all open source" before its h3s).
Specifically: all 8 `contact.html` contact-card headings (Email, Group,
Google Scholar, GitHub, LinkedIn, CV PDF, AMO Toolkit, Poetry) are h3 with
no group h2 anywhere on the page; `teaching.html`'s first section (Purdue
laboratories / AMO mini-course / Mentorship) is the same, while its second
section ("Recorded talks") already correctly has an h2 before its h3 video
cards. This is a genuine WCAG 1.3.1/2.4.6 heading-structure gap. I did not
fix it myself because there isn't a purely mechanical fix available: the
site's base CSS gives `h2` a much larger font-size (`clamp(1.65rem, 3vw,
2.65rem)`) than `h3` (`1.08rem`) with no existing per-card override, and
`contact.html`'s cards also rely on a `.contact-card[href] h3::after` CSS
rule for their "↗" arrow — so simply promoting the tags would blow up the
card typography and drop the arrow icon (a CSS override could compensate,
but that's a visual-design call, not a mechanical one). The alternative —
adding a missing group `<h2>` above each card row, matching the rest of the
site — needs new heading text I shouldn't invent on your behalf (e.g. what
to call the contact-card group; "Ways to connect", "Get in touch", etc.).
Flagging with the specifics above so you can pick an approach; happy to
implement either exact version once you decide.

**External link re-check:** re-tried the Purdue Hammer thesis link (still
403) and, for the first time, both APS DOI links on `publications.html`
(`10.1103/PhysRevLett.131.083001` and `10.1103/PhysRevA.110.043116` — both
also 403'd today, where a prior 09-08 check had one APS DOI resolve fine).
Reads as the same bot/anti-scraping blocking pattern seen on every prior
check, now apparently applied more broadly by APS's site, not evidence of
an actual break — but worth your own manual click on all three, especially
the thesis link, given today's 403 count is the highest yet.

**Not touched / flagged for you, not fixed (all carried over, still open):**
- No mention anywhere on the site of your current role (Quantum Engineer at
  Atom Computing, Boulder, CO) — still just "recently completed his Ph.D.",
  no post-Ph.D. role/location. Still a content/voice decision.
- `contact.html`'s only listed email is still `phataks@purdue.edu` — worth
  confirming that's still your intended primary contact post-Ph.D.
- Homepage meta description (182 chars, over the ~155–160 guideline) —
  still flagging, not rewriting your copy.
- Publications page `<h2>` title-casing (arXiv-style vs. journal-style,
  detailed in the 09-18 entry) — still flagging, not picking a house style
  for you.
- New: heading-hierarchy skip on `contact.html`/`teaching.html`, detailed
  above — flagging an approach choice, not implementing one myself.
- Structured data beyond `index.html`'s `Person` block and
  `publications.html`'s `Thesis`/`ScholarlyArticle` block (added 09-19) —
  could extend further (e.g. `research.html`) but keeping today's scope to
  the items above.
- Purdue Hammer thesis link and both APS DOI links — still recommend your
  own manual click, automated fetch still blocked (see above).

No git commits made (read-only git policy). No HTML/CSS/JS files were
edited this session — everything checked out clean or required a design/
content judgment call I flagged instead of making unilaterally; this log
file is the only thing written to.

### 2026-09-22

**Orientation:** No log entry for 2026-09-21 — this scheduled task apparently
didn't fire that day (or didn't reach the logging step); `git log` confirms
no commits landed in that window either (last commit still `5f80c8a`,
2026-09-19). `git status` at session start showed only `docs/audit-log.md`
locally modified — this log's own uncommitted 09-20 entry, carried over
untouched per policy (this task never commits). No other file had pending
local changes, so nothing was off-limits today. Re-verified the four
original "Highest-value fixes" directly: `projects.html` is in
`sitemap.xml`; `aria-label`/`aria-expanded`/skip-link/`id="main"` present on
all 9 content pages; the `research.html` footer "AMO Toolkit" link carries
`target="_blank" rel="noopener"`; every page has `og:image`/Twitter Card
except `404.html` (expected). No regressions.

**Fresh pass this session:**
- Re-inventoried every external `href` across all 10 pages (grep) and
  spot-checked ones not recently tested: `github.com/saumitraphatak` (loads,
  6 repos, matches expected), `saumitraphatak.github.io/realworld-academy/`
  (loads fine), `curious-writings/articles/12-boston-experience.html`
  (loads fine). `arxiv.org/abs/2505.10540` (the Cs-imaging paper) also
  resolves fine. Instagram/LinkedIn/Google Scholar profile links returned
  `ROBOTS_DISALLOWED` to the fetch tool (their robots.txt blocks bots, not a
  site break — same non-finding as fetching most social profile URLs).
  `amotoolkit.com` again only returned header/JS-shell content to the fetch
  tool — inconclusive, consistent with every prior check, not flagging as
  broken. One YouTube link (`h3b_7vSZtys`) hit a 429 rate limit on the fetch
  tool; did not retry per the avoid-rabbit-holes guidance. Did not re-poke
  the Purdue Hammer thesis link or the two APS DOI links today — both have
  403'd to automated fetch on every check since the audit began (increasing
  scope over time, per the 09-20 entry), clearly bot-blocking rather than a
  real break, and re-testing daily adds no new information; still worth
  Saumitra's own manual click if he hasn't already.
- Verified `<meta charset>` precedes `<meta name="viewport">` precedes the
  gtag snippet on all 10 pages (per CLAUDE.md's stated head-boilerplate
  order) — consistent everywhere, no regressions.
- New check — WCAG contrast ratios: computed relative-luminance contrast
  for every text/accent color in `css/styles.css`'s `:root` against the
  page background (`--bg: #081016`): body text `#eef7f5` → 17.6:1, muted
  text `#9fb2b0` → 8.6:1, accent `#7de2d1` → 12.5:1, accent-2 `#ffc857` →
  12.5:1, accent-3 `#ff7a59` → 7.5:1. All comfortably clear WCAG AA (4.5:1)
  and AAA (7:1) thresholds for normal text — no contrast issues.
- Ran an automated regex pass (Python) across all 10 pages for: stale
  role/status phrases (`Ph.D. candidate`, `104 poems`, `currently
  pursuing`, `graduate student`), duplicated consecutive words, and
  meta-description length outliers. One `graduate student` hit in
  `cv.html` — checked in context: it's "Purdue Graduate Student
  Government" (an award-grantor's proper name), not a stale claim about
  Saumitra's own status — false positive, no action. No duplicated words
  found. Meta description lengths: `404.html` 58 chars and `contact.html`
  51 chars (both fine — short but not broken), `index.html` still 182
  chars (the one over-length outlier, unchanged, still just flagging).
- Attempted to install `codespell` for a proper dictionary-based typo scan
  (both via `device_bash` and, after staging the HTML files, via the cloud
  container's `pip`) — both blocked by network/proxy restrictions with no
  package available. Noting this so a future run doesn't re-attempt the
  same install; manual regex/pattern typo scans (done in several prior
  sessions, including today's duplicate-word check) remain the fallback.

**Not touched / flagged for you, not fixed (all carried over, still open):**
- No mention anywhere on the site of your current role (Quantum Engineer at
  Atom Computing, Boulder, CO) — still just "recently completed his Ph.D.",
  no post-Ph.D. role/location. Still a content/voice decision.
- `contact.html`'s only listed email is still `phataks@purdue.edu` — worth
  confirming that's still your intended primary contact post-Ph.D.
- Homepage meta description (182 chars, over the ~155–160 guideline) —
  still flagging, not rewriting your copy.
- Publications page `<h2>` title-casing (arXiv-style vs. journal-style,
  detailed in the 09-18 entry) — still flagging, not picking a house style
  for you.
- Heading-hierarchy skip on `contact.html`/`teaching.html` (no `<h2>`
  before the card `<h3>`s), detailed in the 09-20 entry — still flagging an
  approach choice (CSS override vs. new group heading text), not
  implementing one myself.
- Structured data beyond `index.html`'s `Person` block and
  `publications.html`'s `Thesis`/`ScholarlyArticle` block — could extend
  further (e.g. `research.html`) but keeping today's scope to the items
  above.
- Purdue Hammer thesis link and both APS DOI links — consistently
  bot-blocked to automated fetch; recommend your own manual click,
  especially the thesis link.

No git commits made (read-only git policy). No HTML/CSS/JS files were
edited this session — everything checked out clean or required a design/
content judgment call already on the flagged list; this log file is the
only thing written to.

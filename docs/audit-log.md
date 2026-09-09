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

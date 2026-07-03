# Project Context: curious96-site

## Short Description
Personal academic portfolio for Saumitra Phatak. This is the public-facing home base for research identity, publications, CV, teaching, projects, writing, poetry links, and contact information.

## What This Repo Is For
This site should feel like a polished academic portfolio rather than a heavy application. It is meant for collaborators, faculty, students, recruiters, conference contacts, and anyone who wants a quick map of Saumitra's work. The site should make it easy to answer: who is Saumitra, what does he work on, what has he built or written, and how can someone contact him?

## Current Shape
- Static HTML/CSS/JS site.
- GitHub Pages style deployment, with `CNAME` present for custom domain routing.
- Main pages live at the repository root: `index.html`, `research.html`, `publications.html`, `projects.html`, `teaching.html`, `writing.html`, `poetry.html`, `cv.html`, and `contact.html`.
- Shared styling is in `css/styles.css`.
- Shared interactions are in `js/main.js`.
- Academic assets live in `assets/`, including `Saumitra_Phatak_CV.pdf` and profile imagery.
- `sitemap.xml` and `robots.txt` are present for search discoverability.

## Design Intent
Keep this site clear, credible, and lightweight. It should read as an academic identity page with some warmth, not as a startup landing page. The strongest improvements usually come from better content hierarchy, updated CV/publications, clean navigation, and visual consistency across pages.

## Key Maintenance Notes
- Update `assets/Saumitra_Phatak_CV.pdf` whenever the CV changes.
- Keep `publications.html` current with papers, preprints, talks, and thesis-related outputs.
- Keep links to the writing, poetry, AMO Toolkit, and other side projects current.
- If URLs change, update both page links and `sitemap.xml`.
- Avoid adding heavy frameworks unless the site becomes genuinely app-like.

## Local Preview
Open `index.html` directly in a browser. Because this is a static site, no dev server is normally required.

## Deployment
Push to GitHub. GitHub Pages should serve the current branch according to repo settings. Check the custom domain in `CNAME` before changing deployment settings.

## Good Future Improvements
- Add a compact research timeline or selected highlights section.
- Add richer project cards with screenshots for major tools.
- Add a publication update checklist so new papers are easy to add consistently.
- Make sure the visual language stays aligned with the AMO Toolkit and Curious Writings ecosystem without making all sites look identical.

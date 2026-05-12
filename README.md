# curious96-site

A from-scratch static rebuild of `www.curious96.com` for Saumitra Phatak.

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

## Deployment plan

When ready to replace the current Google Sites page:

1. Push this repository to GitHub.
2. Enable GitHub Pages from the `main` branch and root folder.
3. Add `www.curious96.com` as the custom domain.
4. Update DNS where `curious96.com` is managed.
5. Enforce HTTPS after the certificate is provisioned.

Do not switch DNS until the content is reviewed.

## Files to add manually

- `assets/Saumitra_Phatak_CV.pdf` for the CV download button.
- Optional images: portrait, lab photos, tweezer/cooling figures, talk thumbnails.
- Full essay text migrated from old PDF blog files.
- Full poem archive if desired.

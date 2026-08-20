# Aditya Deshpande — Portfolio

A deployment-ready, one-page portfolio and resume site built with React,
TypeScript, Next.js, and Vinext. It uses a native dark theme, responsive portrait
art direction, scroll-linked hero transitions, section reveals, and active
navigation.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal.

## Production checks

```bash
npm run lint
npm test
```

`npm test` creates and validates the Cloudflare-compatible production build.

## Edit the portfolio

- Main page, resume content, links, and skill groups: `app/page.tsx`
- Colors, layout, responsive crop behavior, and animation: `app/globals.css`
- Browser metadata and search description: `app/layout.tsx`
- Hero images: `public/images/`
- Downloadable resume: `public/resume/Aditya_Deshpande_Tech_Resume.pdf`

The experience and skill sections are data arrays near the top of `app/page.tsx`,
so updates do not require changing the page structure. A future project section
can follow the same pattern: add a `projects` array, map it into a new section,
and add its anchor to the navigation.

## GitHub

Create an empty GitHub repository, then run:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git add .
git commit -m "Launch portfolio"
git push -u origin main
```

The included GitHub Actions workflow checks every push and pull request with
Node 22.

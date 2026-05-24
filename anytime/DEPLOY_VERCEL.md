# Deploying to Vercel

This document explains how to deploy this Next.js project to Vercel (recommended for Next.js apps because Vercel supports SSR/ISR out of the box).

Quick summary
- Connect this GitHub repository to Vercel and enable automatic deployments on push to `main` (or your default branch).
- Vercel will auto-detect this as a Next.js project and run `npm run build`.

Step-by-step

1. Sign in to Vercel (https://vercel.com) and choose "Import Project" → "Import Git Repository".
2. Select this repository and the branch you want to deploy (usually `main`).
3. Vercel should auto-detect the project as "Next.js". Confirm the detected framework and build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: (leave blank — Vercel handles Next.js outputs)
4. Environment variables: if your app uses secrets (for example `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` for nodemailer), add them under the Environment Variables section in Vercel's project settings.
5. Finish the import. Vercel will run the first build and provide a preview URL. After success, your site will be live on a Vercel domain and on every subsequent push.

Recommended optional files

- `vercel.json` — not required, but useful to pin build behavior or add rewrites/headers.

Example minimal `vercel.json` (optional):

```json
{
  "builds": [
    { "src": "package.json", "use": "@vercel/next" }
  ]
}
```

Notes and troubleshooting
- If you previously tried to host on GitHub Pages and have a `docs/` folder or `gh-pages` branch, you can safely leave them; Vercel will ignore these unless explicitly configured.
- If the site works locally with `npm run dev` / `npm run build`, it will most likely work on Vercel. If builds fail on Vercel, check the build logs in the Vercel dashboard.
- If your app must be served from a repository subpath (e.g., `https://username.github.io/repo`), Vercel is preferable since it serves at root; for GitHub Pages you would need to export and configure `basePath`.

Want me to create `vercel.json` in the repo now? Reply `yes` and I'll add it.


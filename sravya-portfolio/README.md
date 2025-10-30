# Sravya Portfolio (React + Vite + Tailwind)

This is a ready-to-deploy portfolio for GitHub Pages.

## Quick Start (GitHub-only)
1. Create a new GitHub repo (public), e.g. `sravya-portfolio`.
2. Upload **all files** from this folder to the repo.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **GitHub Actions** and select the workflow after first push (or leave it — this repo includes a workflow that will appear automatically).
4. Push/Upload to `main`. The `Deploy to Pages` Action will run and publish your site at:   `https://<your-username>.github.io/sravya-portfolio`

> If your repo name is not `sravya-portfolio`, update `base` in `vite.config.js` to `/<your-repo-name>/` before uploading.

## Local Development (optional)
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Customize
- Edit links in `src/Portfolio.jsx` (`LINKS` and `PROJECTS`)
- Add your resume PDF URL to `LINKS.resume`
- Replace `#` with real GitHub repo links for each project
- Add screenshots to `/public` and reference them in your Projects

## Tech
- React + Vite
- Tailwind CSS
- framer-motion
- lucide-react

## Deploy Troubleshooting
- 404 on assets after deploy? Update `base` in `vite.config.js` to match your repo name.
- Action fails on `build`? Make sure `Settings → Pages → Build and deployment` is set to **GitHub Actions**.

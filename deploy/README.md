# Deploy this folder to get a live URL

## Option 1: Netlify Drop (easiest)

1. Go to **https://app.netlify.com/drop**
2. Drag the **`deploy`** folder (this folder) onto the page.
3. You get a live URL like `https://random-name-123.netlify.app` right away.

No account required for a quick test; sign up (free) if you want to keep the site and get a custom name.

---

## Option 2: Surge (from terminal)

From the project root:

```bash
npx surge deploy/index.html pmconsulting.surge.sh
```

(Surge will prompt for email/password the first time. You can use any subdomain if that one is taken.)

---

## Option 3: GitHub Pages / Vercel / Cloudflare Pages

Push the repo to GitHub, then connect it to any of these; set the **publish directory** to `deploy` (or the root and use `hero-standalone.html` as the main page).

---

**Note:** When you change `hero-standalone.html` in the project root, copy it into `deploy/index.html` (or run `cp hero-standalone.html deploy/index.html`) before deploying again.

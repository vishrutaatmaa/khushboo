# khushboo-site

A single-page static site. No build step — just `index.html`, `style.css`, `script.js`.

## Deploy in under 2 minutes

### 1. Push to GitHub
```bash
cd khushboo-site
git init
git add .
git commit -m "initial commit"
gh repo create khushboo-site --public --source=. --remote=origin --push
```
(No `gh` CLI? Create an empty repo on github.com, then:)
```bash
git remote add origin https://github.com/<your-username>/khushboo-site.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to vercel.com → **Add New Project**
2. Import the `khushboo-site` GitHub repo
3. Framework preset: **Other** (it's static — no build command, no output directory needed)
4. Click **Deploy**

That's it — no config file required. Vercel will serve `index.html` as-is.

### Optional: instant deploy without GitHub
```bash
npx vercel --prod
```
run from inside the `khushboo-site` folder (uses the Vercel CLI directly).

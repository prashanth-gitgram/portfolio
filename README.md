# Prashanth C · Developer Portfolio

A static, single-page portfolio (plain HTML, CSS and JS: no build step, no frameworks). Works on GitHub Pages as is.

## Files
```
index.html      page content (About, Experience, Skills, Education, Contact)
styles.css      styles (dark theme by default, light theme toggle)
script.js       CONFIG, project data, animations, project modal
assets/         favicon, plus your resume PDF (see below)
.nojekyll       tells GitHub Pages to serve files as is
preview/        screenshots only; you can delete this folder before publishing
```

## Publish on GitHub Pages
1. Create a new repository on GitHub.
   - Name it `<your-username>.github.io` to get the site at `https://<your-username>.github.io/`, **or**
   - use any name (e.g. `portfolio`) to get `https://<your-username>.github.io/portfolio/`.
2. Push these files to the **root** of the `main` branch:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, open the repo, go to **Settings → Pages**, set **Source: Deploy from a branch**, choose **Branch: `main`** and folder **`/ (root)`**, then **Save**.
4. Wait a minute or two; the site URL appears at the top of the Pages settings.

## Things to fill in
1. **GitHub link.** Open `script.js`. At the very top:
   ```js
   const CONFIG = {
     githubUsername: "",   // put your GitHub username here, e.g. "prashanthc"
     resumePath: "assets/Prashanth_C_Resume.pdf",
   };
   ```
   While `githubUsername` is empty, GitHub links stay hidden. Once you set it, a GitHub icon appears in the hero and a GitHub row in Contact.
2. **Resume PDF.** The **Download Resume** button points to `assets/Prashanth_C_Resume.pdf`, but that file is **not included yet**. Add your final resume PDF with exactly that name in the `assets/` folder, or the button will give a 404. To use a different name, change `resumePath` in `CONFIG`.
3. **Project durations** are hidden for now. Each project in the `PROJECTS` list in `script.js` has `duration: ""`. Type a value such as `duration: "Jul 2025 – Present"` and it shows next to the company name on the card and in the popup.

## Editing content
- Projects (title, description, environment, skills, responsibilities): the `PROJECTS` array in `script.js`.
- Summary, experience, skills, education, contact: `index.html`.
- Colours: the CSS variables at the top of `styles.css` (`--accent`, `--bg`, and so on).

## Preview locally
```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

Deep link to a project: `.../#project-phishing`, `#project-grc`, `#project-email`, `#project-property`, `#project-wedding`.

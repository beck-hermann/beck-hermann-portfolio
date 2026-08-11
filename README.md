# Beck Hermann — Engineering Portfolio

A simple 5-page static website. No build tools, no frameworks — just HTML, CSS, and a tiny bit
of JavaScript for the mobile menu. Every page is a plain `.html` file you can open and edit
directly.

## Files

```
index.html                 Home
about.html                 About Me
engineering-projects.html  Engineering Projects
personal-projects.html     Personal Projects
links.html                 Links & Downloads
assets/css/style.css       All styling (colors, fonts, layout) — one file controls the look
assets/js/main.js          Mobile nav menu toggle (that's all it does)
assets/img/                Placeholder graphics + your real photos go here
assets/resume/             Your résumé PDF
```

## Previewing the site on your computer

No server or install needed — just double-click `index.html` and it opens in your browser.
Click through the nav tabs to check your changes. Every time you edit and save an `.html` file,
refresh the browser tab to see the update.

## Adding a new project

Open `engineering-projects.html` or `personal-projects.html`. Each project is one
`<article class="project">...</article>` block. To add a new one:

1. Select an entire existing block, from `<!-- PROJECT BLOCK -->` down through `</article>`.
2. Copy it and paste it above or below the others.
3. Edit, inside your pasted copy:
   - The year and class/context text in `<p class="project-meta">`
   - The `<h2>` title
   - The 1–4 `<img>` tags inside `<div class="gallery">` — delete extra `<img>` lines if you
     have fewer than 4 photos, or copy one more line if you have more (max looks best at 4)
   - The 2–3 `<p>` paragraphs of write-up text
   - The Repo/Demo links at the bottom (or delete the whole `<div class="project-links">` if
     there's nothing to link to)

Every project block automatically gets a horizontal rule underneath it, so new projects stay
visually separated from the ones before and after.

## Adding your own photos

Placeholder images live in `assets/img/` (`placeholder-landscape.svg`,
`placeholder-headshot.svg`, `placeholder-project.svg`) and are just dashed-outline stand-ins.

To swap one in:
1. Drop your real photo file into `assets/img/` (e.g. `assets/img/home-landscape.jpg`,
   `assets/img/headshot.jpg`, `assets/img/my-project-1.jpg`).
2. Find the matching `<img ... src="assets/img/placeholder-....svg" ...>` tag in the relevant
   `.html` file and change only the `src="..."` value to your new filename.
3. Also update the `alt="..."` text to describe the photo (helps accessibility and search).

Keep photos reasonably sized (under ~1–2 MB each) so pages load quickly.

## Updating your résumé

1. Drop the new PDF into `assets/resume/`.
2. In `links.html`, update the `href="assets/resume/..."` on the download button to the new
   filename.

## Updating your social links

In `links.html`, under "Find Me Elsewhere," each `<li><a href="#">...</a></li>` is one link.
Replace `href="#"` with your real profile URL (e.g. your LinkedIn URL), and change the link text
if needed. Copy/paste an `<li>` line to add more (GitHub, Instagram, a blog, etc).

## Changing colors or fonts

Everything is controlled from the top of `assets/css/style.css`, inside the `:root { ... }`
block. Each page section (Home, About, Engineering, Personal, Links) has its own accent color
variable — change the hex codes there to re-theme the whole site.

## Putting it online with GitHub Pages (free)

1. Go to [github.com](https://github.com) and create a **new repository** (e.g. named
   `portfolio` or `beck-hermann-portfolio`). Leave it public, and don't add a README/gitignore
   (you already have files here).
2. Open a terminal in this folder (`03_Portfolio_Website`) and run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub, open your new repo → **Settings** → **Pages** (left sidebar).
4. Under "Build and deployment," set **Source** to "Deploy from a branch," pick the **main**
   branch and **/ (root)** folder, then **Save**.
5. After a minute or two, GitHub will show your live URL — something like
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

Any time you make edits afterward, just run `git add .`, `git commit -m "..."`, and
`git push` again to update the live site.

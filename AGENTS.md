# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Jekyll-based academic website (al-folio theme v0.14.6) for Prof. Özgür Barış Akan at the University of Cambridge. It is a static site generator that builds HTML/CSS/JS from Markdown, Liquid templates, and BibTeX files.

### Running the Dev Server

```bash
export EXECJS_RUNTIME=Node JEKYLL_ENV=development LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --trace
```

The site is served at `http://localhost:8080/` with LiveReload on port 35729.

### Linting

```bash
npx prettier --check "**/*.{html,css,js,json,md,yml,yaml,liquid}"
```

The codebase has existing formatting issues; do not auto-fix unless explicitly asked.

### Key Gotchas

- **EXECJS_RUNTIME=Node** must be set or `jekyll-terser` will fail to minify JS.
- **ImageMagick** is required for responsive WebP image generation (`jekyll-imagemagick` plugin). The build will produce file conflict warnings for duplicate image entries—these are harmless.
- **nbconvert** (Python) is required by `jekyll-jupyter-notebook` plugin for converting `.ipynb` files to HTML during the build.
- The Gemfile includes `jekyll-terser` from a Git repository (`https://github.com/RobertoJBeltran/jekyll-terser.git`), so `bundle install` requires network access.
- Sass deprecation warnings about `@import` are expected (upstream dependency) and do not affect the build.
- The initial build takes ~20-25 seconds due to image processing and notebook conversion.
- There are no automated test suites in this repository; testing is done via site build success and manual inspection.

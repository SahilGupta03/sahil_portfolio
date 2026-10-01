# Sahil Gupta — Portfolio

Personal portfolio of Sahil Gupta, Software Engineer (Frontend).

**Live:** https://sahilgupta03.github.io/sahil_portfolio/

Built with React (Create React App) and SCSS. No UI framework, no icon font —
icons are inline SVG and the only external request is Google Fonts.

## Editing content

All text lives in [`src/portfolio.js`](src/portfolio.js) — profile, hero, about,
skills, experience, projects, education, achievements and contact. Components
read from it, so most updates don't require touching JSX.

The downloadable resume is [`public/Sahil_Gupta_Resume.pdf`](public/Sahil_Gupta_Resume.pdf).
Replace that file (keeping the name) to update it.

## Project structure

```
public/            index.html (SEO + social meta), resume PDF, og-image, icons
src/
  portfolio.js     all site content
  index.scss       design tokens (light/dark), base styles, shared utilities
  styles/          SCSS breakpoints/mixins
  components/      Header, Footer, Button, SectionHeading, Reveal, ThemeToggle,
                   SocialMedia, icons
  containers/      page sections: hero, about, skills, workExperience,
                   projects, education, contact
  hooks/           useLocalStorage, useActiveSection
```

## Scripts

```bash
npm install
npm start          # dev server
npm test           # tests
npm run build      # production build into build/
npm run deploy     # build + publish build/ to the gh-pages branch
```

The site is served from the `/sahil_portfolio/` sub-path; the `homepage` field
in `package.json` makes CRA emit asset URLs for that path. Files in `public/`
are referenced through `process.env.PUBLIC_URL` (or `%PUBLIC_URL%` in HTML).

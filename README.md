# KLIK I.T. Website

The KLIK I.T. website is built with Vite and plain HTML, CSS, and JavaScript.

## Requirements

- Node.js 20.19 or later
- npm

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Do not open the source `index.html` directly from File Explorer; Vite must serve the JavaScript module and its CSS import.

## Production build

```sh
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

For a local production preview, use `npm run preview` and open the URL printed by Vite. The build uses relative asset URLs, so it does not depend on the site being mounted at the domain root.

## Render static-site settings

- Build command: `npm install && npm run build`
- Publish directory: `dist`

Connect the GitHub repository to Render and configure it as a Static Site using those settings.

## Assets

Place approved image assets in `public/images/`. Preserve the approved KLIK I.T. logo image unchanged and display it at its natural proportions.

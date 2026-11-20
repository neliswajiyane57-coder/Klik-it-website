import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  // Keep asset URLs relative so the static build works from the site's served path.
  base: './',
  input: {
    home: fileURLToPath(new URL('./index.html', import.meta.url)),
    websiteDesign: fileURLToPath(new URL('./website-design.html', import.meta.url)),
    professionalBranding: fileURLToPath(
      new URL('./professional-branding.html', import.meta.url),
    ),
    digitalBusinessSolutions: fileURLToPath(
      new URL('./digital-business-solutions.html', import.meta.url),
    ),
  },
});

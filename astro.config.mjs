import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// GITHUB_PAGES is set by .github/workflows/deploy-pages.yml so the site
// builds under the /tcweb/ subpath GitHub Pages serves it from. Leave it
// unset for local dev/build and once a custom domain replaces this preview.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGithubPages ? 'https://tiagocarneiro93.github.io/tcweb' : 'https://tiagocarneiro.pt',
  base: isGithubPages ? '/tcweb' : '/',
  integrations: [react()],
});

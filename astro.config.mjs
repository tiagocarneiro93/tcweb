import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// GITHUB_PAGES is set by .github/workflows/deploy-pages.yml so the site
// builds under the /tcweb/ subpath GitHub Pages serves it from. Leave it
// unset for local dev/build and once a custom domain replaces this preview.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // `site` is the origin only — Astro combines it with `base` itself when
  // generating canonical URLs and the sitemap, so `base` is the only place
  // the /tcweb subpath belongs (also see src/lib/url.ts for in-page links).
  site: isGithubPages ? 'https://tiagocarneiro93.github.io' : 'https://tiagocarneiro.pt',
  base: isGithubPages ? '/tcweb' : '/',
  integrations: [react(), sitemap()],
});

// Prefixes a root-relative path with the configured base path (e.g. "/tcweb/"
// on GitHub Pages, "/" for the real domain) so links and asset URLs work under
// either. Astro only does this automatically for assets it imports itself.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

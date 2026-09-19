// Central map of page slugs and anchor ids per language. English pages live
// under /en/*; Portuguese (the default) stays at the root. Keeping this in
// one place means the language switcher and hreflang tags never have to
// guess how a slug translates — they just look it up.
export type Lang = 'pt' | 'en';

export const routes = {
  home: { pt: '', en: '' },
  services: { pt: 'servicos', en: 'services' },
  contact: { pt: 'contacto', en: 'contact' },
  cookies: { pt: 'politica-de-cookies', en: 'cookie-policy' },
  privacy: { pt: 'politica-de-privacidade', en: 'privacy-policy' },
} as const;

export type RouteKey = keyof typeof routes;

export const anchors = {
  projects: { pt: 'projetos', en: 'projects' },
  about: { pt: 'sobre', en: 'about' },
} as const;

// Prefixes a slug with the language folder (English only — pt is the
// default and lives at the root). Pass the result to withBase().
export function localePath(lang: Lang, slug: string): string {
  return lang === 'en' ? `en/${slug}` : slug;
}

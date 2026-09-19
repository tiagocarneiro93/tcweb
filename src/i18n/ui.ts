import type { Lang } from '../lib/routes';

// Shared strings for chrome that appears on every page (header, footer,
// cookie banner) — the kind of copy that's the same regardless of which
// page you're on. Page-specific content (headlines, service descriptions...)
// lives directly in each src/pages/en/*.astro file instead, since it only
// needs to exist once per page, not be looked up.
export const ui = {
  pt: {
    nav: {
      services: 'Serviços',
      projects: 'Projetos',
      about: 'Sobre',
      cta: 'Marcar conversa',
      switchTo: 'EN',
    },
    footer: {
      tagline: 'Presença digital à medida.',
      servicesCol: 'Serviços',
      websites: 'Websites',
      systems: 'Sistemas',
      consulting: 'Consultoria',
      companyCol: 'Empresa',
      projects: 'Projetos',
      about: 'Sobre',
      contactCol: 'Contacto',
      cookiePolicy: 'Política de cookies',
      cookieSettings: 'Preferências de cookies',
      privacyPolicy: 'Política de privacidade',
      nif: 'NIF',
    },
    cookie: {
      message: 'Utilizamos cookies essenciais ao funcionamento do site e, apenas com o seu consentimento, cookies analíticos e de marketing. Pode aceitar, rejeitar ou escolher quais permitir.',
      learnMore: 'Saber mais',
      customize: 'Personalizar',
      reject: 'Rejeitar todos',
      accept: 'Aceitar todos',
      necessaryTitle: 'Necessários',
      necessaryBody: 'Essenciais ao funcionamento do site, como guardar esta preferência. Estão sempre ativos.',
      analyticsTitle: 'Analíticos',
      analyticsBody: 'Ajudariam a perceber como o site é utilizado, de forma agregada. Não estão atualmente em uso.',
      marketingTitle: 'Marketing',
      marketingBody: 'Usados para medir campanhas e mostrar conteúdo relevante. Não estão atualmente em uso.',
      save: 'Guardar preferências',
    },
  },
  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      cta: 'Book a call',
      switchTo: 'PT',
    },
    footer: {
      tagline: 'Digital presence, tailored.',
      servicesCol: 'Services',
      websites: 'Websites',
      systems: 'Systems',
      consulting: 'Consulting',
      companyCol: 'Company',
      projects: 'Projects',
      about: 'About',
      contactCol: 'Contact',
      cookiePolicy: 'Cookie policy',
      cookieSettings: 'Cookie preferences',
      privacyPolicy: 'Privacy policy',
      nif: 'Tax ID',
    },
    cookie: {
      message: 'We use cookies essential to the site working and, only with your consent, analytics and marketing cookies. You can accept, reject, or choose which to allow.',
      learnMore: 'Learn more',
      customize: 'Customize',
      reject: 'Reject all',
      accept: 'Accept all',
      necessaryTitle: 'Necessary',
      necessaryBody: 'Essential to the site working, such as remembering this preference. Always active.',
      analyticsTitle: 'Analytics',
      analyticsBody: 'Would help us understand site usage in aggregate. Not currently in use.',
      marketingTitle: 'Marketing',
      marketingBody: 'Used to measure campaigns and show relevant content. Not currently in use.',
      save: 'Save preferences',
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

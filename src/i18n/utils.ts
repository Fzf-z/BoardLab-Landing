import { en } from './en';
import { es } from './es';

export type Translations = typeof en;
export type Lang = 'en' | 'es';

const translations: Record<Lang, Translations> = { en, es };

/**
 * Extracts the locale from a URL pathname.
 * English lives at / (no prefix), Spanish at /es/.
 */
export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'es') return 'es';
  return 'en';
}

/**
 * Returns the translation object for the given locale.
 */
export function t(lang: Lang): Translations {
  return translations[lang];
}

/**
 * Returns a localized path. English has no prefix, Spanish uses /es/.
 * Example: getLocalizedPath('es', '/pricing') => '/es/pricing'
 *          getLocalizedPath('en', '/')        => '/'
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return `/es${clean}`;
}

/**
 * Returns the other locale (the one the user would switch TO).
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

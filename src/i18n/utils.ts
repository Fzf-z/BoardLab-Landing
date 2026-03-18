import { en } from './en';
import { es } from './es';

export type Translations = typeof en;
export type Lang = 'en' | 'es';

const translations: Record<Lang, Translations> = { en, es };

/**
 * Extracts the locale from a URL pathname.
 * Expects routes prefixed with /en/ or /es/ (prefixDefaultLocale: true).
 * Falls back to 'en' if no known locale prefix is found.
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
 * Prepends the locale prefix to a path.
 * Ensures the result always starts with /<lang>/.
 * Example: getLocalizedPath('es', '/pricing') => '/es/pricing'
 *          getLocalizedPath('en', '/')        => '/en/'
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
}

/**
 * Returns the other locale (the one the user would switch TO).
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

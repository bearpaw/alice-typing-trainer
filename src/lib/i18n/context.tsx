import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_LOCALE, HTML_LANG, isLocale, Locale, Messages, SUPPORTED_LOCALES } from './types';
import en from './en';
import zhCN from './zh-CN';
import zhTW from './zh-TW';
import ja from './ja';

const MESSAGES: Record<Locale, Messages> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
};

const LOCALE_STORAGE_KEY = 'att.locale.v1';

type Ctx = {
  locale: Locale;
  t: Messages;
  setLocale: (l: Locale) => void;
  localizedPath: (to: string, override?: Locale) => string;
};

const LocaleCtx = createContext<Ctx | null>(null);

function extractLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  if (isLocale(first) && first !== DEFAULT_LOCALE) return first;
  return DEFAULT_LOCALE;
}

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const rest = '/' + segments.slice(1).join('/');
    return rest === '/' ? '/' : rest;
  }
  return pathname || '/';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = extractLocaleFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.setAttribute('lang', HTML_LANG[locale]);
  }, [locale]);

  const value = useMemo<Ctx>(() => {
    const localizedPath = (to: string, override?: Locale) => {
      const useLocale = override ?? locale;
      const normalized = to.startsWith('/') ? to : `/${to}`;
      if (useLocale === DEFAULT_LOCALE) return normalized;
      return `/${useLocale}${normalized === '/' ? '' : normalized}`;
    };

    const setLocale = (next: Locale) => {
      if (next === locale) return;
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        // ignore
      }
      const logical = stripLocalePrefix(location.pathname);
      const target =
        next === DEFAULT_LOCALE ? logical : `/${next}${logical === '/' ? '' : logical}`;
      navigate(target);
    };

    return {
      locale,
      t: MESSAGES[locale],
      setLocale,
      localizedPath,
    };
  }, [locale, location.pathname, navigate]);

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocaleCtx(): Ctx {
  const v = useContext(LocaleCtx);
  if (!v) throw new Error('useLocaleCtx used outside LocaleProvider');
  return v;
}

export function useT(): Messages {
  return useLocaleCtx().t;
}

export function useLocale(): Locale {
  return useLocaleCtx().locale;
}

export function useLocalizedPath() {
  return useLocaleCtx().localizedPath;
}

export function loadSavedLocale(): Locale | null {
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(raw)) return raw;
  } catch {
    // ignore
  }
  return null;
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const candidates = [navigator.language, ...(navigator.languages ?? [])];
  for (const raw of candidates) {
    if (!raw) continue;
    if (isLocale(raw)) return raw;
    const lower = raw.toLowerCase();
    if (lower === 'zh' || lower.startsWith('zh-cn') || lower.startsWith('zh-hans'))
      return 'zh-CN';
    if (lower.startsWith('zh-tw') || lower.startsWith('zh-hant') || lower.startsWith('zh-hk'))
      return 'zh-TW';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('en')) return 'en';
  }
  return DEFAULT_LOCALE;
}

export { SUPPORTED_LOCALES };

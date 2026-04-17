import { useEffect } from 'react';
import { HTML_LANG, Locale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from './i18n/types';

const SITE_URL = 'https://bearpaw.github.io/alice-typing-trainer';

export type SeoFields = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
};

export function useSeo({ title, description, path, locale }: SeoFields) {
  useEffect(() => {
    document.title = title;
    document.documentElement.setAttribute('lang', HTML_LANG[locale]);
    const canonicalPath = locale === DEFAULT_LOCALE ? path : `/${locale}${path === '/' ? '' : path}`;
    const url = SITE_URL + canonicalPath;
    setMetaByName('description', description);
    setMetaByProp('og:title', title);
    setMetaByProp('og:description', description);
    setMetaByProp('og:url', url);
    setMetaByProp('og:locale', HTML_LANG[locale].replace('-', '_'));
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setCanonical(url);
    setHreflangAlternates(path);
  }, [title, description, path, locale]);
}

function setMetaByName(name: string, content: string) {
  setMeta(`meta[name="${name}"]`, (el) => {
    el.setAttribute('name', name);
    el.setAttribute('content', content);
  });
}

function setMetaByProp(property: string, content: string) {
  setMeta(`meta[property="${property}"]`, (el) => {
    el.setAttribute('property', property);
    el.setAttribute('content', content);
  });
}

function setMeta(selector: string, apply: (el: HTMLMetaElement) => void) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  apply(el);
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setHreflangAlternates(path: string) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  for (const l of SUPPORTED_LOCALES) {
    const url = SITE_URL + (l === DEFAULT_LOCALE ? path : `/${l}${path === '/' ? '' : path}`);
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', HTML_LANG[l]);
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
  const xDefault = document.createElement('link');
  xDefault.setAttribute('rel', 'alternate');
  xDefault.setAttribute('hreflang', 'x-default');
  xDefault.setAttribute('href', SITE_URL + path);
  document.head.appendChild(xDefault);
}

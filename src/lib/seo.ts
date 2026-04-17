import { useEffect } from 'react';

const SITE_URL = 'https://bearpaw.github.io/alice-typing-trainer';

export type SeoFields = {
  title: string;
  description: string;
  path: string;
};

export function useSeo({ title, description, path }: SeoFields) {
  useEffect(() => {
    document.title = title;
    const url = SITE_URL + (path === '/' ? '/' : path);
    setMetaByName('description', description);
    setMetaByProp('og:title', title);
    setMetaByProp('og:description', description);
    setMetaByProp('og:url', url);
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setCanonical(url);
  }, [title, description, path]);
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

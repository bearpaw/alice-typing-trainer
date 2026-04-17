import { useCallback, useEffect, useState } from 'react';

export type ThemePref = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const THEME_KEY = 'att.theme.v1';
const THEME_COLOR = { light: '#f6f7fa', dark: '#14171f' } as const;

export const THEME_CYCLE: ThemePref[] = ['auto', 'light', 'dark'];

export function loadThemePref(): ThemePref {
  try {
    const raw = localStorage.getItem(THEME_KEY);
    if (raw === 'light' || raw === 'dark' || raw === 'auto') return raw;
  } catch {
    // ignore
  }
  return 'auto';
}

export function saveThemePref(p: ThemePref): void {
  try {
    localStorage.setItem(THEME_KEY, p);
  } catch {
    // ignore
  }
}

export function resolveTheme(pref: ThemePref, now: Date = new Date()): ResolvedTheme {
  if (pref === 'light' || pref === 'dark') return pref;
  const h = now.getHours();
  return h >= 6 && h < 18 ? 'light' : 'dark';
}

export function applyTheme(resolved: ResolvedTheme): void {
  document.documentElement.setAttribute('data-theme', resolved);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLOR[resolved]);
}

export function useTheme() {
  const [pref, setPref] = useState<ThemePref>(() => loadThemePref());
  const [resolved, setResolved] = useState<ResolvedTheme>(() => resolveTheme(pref));

  useEffect(() => {
    const r = resolveTheme(pref);
    setResolved(r);
    applyTheme(r);
    saveThemePref(pref);
  }, [pref]);

  useEffect(() => {
    if (pref !== 'auto') return;
    const onVisible = () => {
      if (document.visibilityState !== 'visible') return;
      const r = resolveTheme('auto');
      setResolved((prev) => {
        if (prev !== r) applyTheme(r);
        return r;
      });
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [pref]);

  const cycle = useCallback(() => {
    setPref((p) => {
      const i = THEME_CYCLE.indexOf(p);
      return THEME_CYCLE[(i + 1) % THEME_CYCLE.length];
    });
  }, []);

  return { pref, resolved, cycle };
}

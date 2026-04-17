import { ResolvedTheme, ThemePref, useTheme } from '../lib/theme';

const NEXT_LABEL: Record<ThemePref, string> = {
  auto: 'Switch to light mode',
  light: 'Switch to dark mode',
  dark: 'Switch to auto mode',
};

const TITLE: Record<ThemePref, string> = {
  auto: 'Theme: auto (follows time of day)',
  light: 'Theme: light',
  dark: 'Theme: dark',
};

export function ThemeToggle() {
  const { pref, resolved, cycle } = useTheme();
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={NEXT_LABEL[pref]}
      title={TITLE[pref]}
    >
      <Icon resolved={resolved} />
      {pref === 'auto' && <span className="theme-toggle__badge">A</span>}
    </button>
  );
}

function Icon({ resolved }: { resolved: ResolvedTheme }) {
  if (resolved === 'light') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

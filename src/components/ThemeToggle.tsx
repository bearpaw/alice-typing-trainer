import { ResolvedTheme, useTheme } from '../lib/theme';
import { useT } from '../lib/i18n/context';

export function ThemeToggle() {
  const t = useT();
  const { pref, resolved, cycle } = useTheme();
  const entry = t.theme[pref];
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={entry.aria}
      title={entry.title}
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

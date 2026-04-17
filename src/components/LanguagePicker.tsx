import { ChangeEvent } from 'react';
import { useLocaleCtx } from '../lib/i18n/context';
import { LOCALE_LABELS, Locale, SUPPORTED_LOCALES } from '../lib/i18n/types';

export function LanguagePicker() {
  const { locale, setLocale, t } = useLocaleCtx();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };
  return (
    <label className="language-picker" aria-label={t.language.label}>
      <span aria-hidden="true">🌐</span>
      <select value={locale} onChange={onChange}>
        {SUPPORTED_LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_LABELS[l]}
          </option>
        ))}
      </select>
    </label>
  );
}

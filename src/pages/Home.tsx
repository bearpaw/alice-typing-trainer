import { Link } from 'react-router-dom';
import { KeyboardView } from '../components/KeyboardView';
import { useSeo } from '../lib/seo';
import { useLocaleCtx } from '../lib/i18n/context';
import { Rich } from '../lib/i18n/RichText';

export function Home() {
  const { t, localizedPath, locale } = useLocaleCtx();
  useSeo({
    title: t.seo.home.title,
    description: t.seo.home.description,
    path: '/',
    locale,
  });
  return (
    <div>
      <div className="hero">
        <h1>{t.home.hero.title}</h1>
        <p>
          <Rich text={t.home.hero.desc} />
        </p>
      </div>

      <div className="row">
        <Link
          to={localizedPath('/posture')}
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>{t.home.cards.posture.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>{t.home.cards.posture.desc}</p>
        </Link>
        <Link
          to={localizedPath('/lessons')}
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>{t.home.cards.lessons.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>{t.home.cards.lessons.desc}</p>
        </Link>
        <Link
          to={localizedPath('/test')}
          className="card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>{t.home.cards.test.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>{t.home.cards.test.desc}</p>
        </Link>
      </div>

      <h2>{t.home.keyboardHeading}</h2>
      <p style={{ color: 'var(--text-dim)' }}>
        <Rich text={t.home.keyboardDesc} />
      </p>
      <div className="keyboard-wrap">
        <KeyboardView highlightChar={null} />
      </div>
    </div>
  );
}

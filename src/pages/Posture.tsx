import { useSeo } from '../lib/seo';
import {
  DeskGeometryDiagram,
  FloatVsPlantDiagram,
  UlnarDeviationDiagram,
  WristNeutralDiagram,
} from '../components/PostureDiagrams';
import { useLocaleCtx } from '../lib/i18n/context';
import { Rich, SRC } from '../lib/i18n/RichText';
import type { Bullet } from '../lib/i18n/types';

function BulletList({ bullets }: { bullets: Bullet[] }) {
  return (
    <ul>
      {bullets.map((b, i) => (
        <li key={i}>
          {b.title && <strong>{b.title}</strong>}
          {b.title && b.body && ' '}
          {b.body && <Rich text={b.body} />}
        </li>
      ))}
    </ul>
  );
}

export function Posture() {
  const { t, locale } = useLocaleCtx();
  useSeo({
    title: t.seo.posture.title,
    description: t.seo.posture.description,
    path: '/posture',
    locale,
  });
  const p = t.posture;
  return (
    <div className="posture">
      <h1>{p.title}</h1>
      <p style={{ color: 'var(--text-dim)' }}>{p.intro}</p>

      <h2>{p.sections.neutral.heading}</h2>
      <BulletList bullets={[p.sections.neutral.bullets[0]]} />
      <WristNeutralDiagram />
      <BulletList bullets={[p.sections.neutral.bullets[1]]} />
      <UlnarDeviationDiagram />
      <BulletList bullets={[p.sections.neutral.bullets[2]]} />
      <div className="callout">
        <strong>{p.sections.neutral.palmCallout.title}</strong>
        <ul style={{ marginTop: '0.4rem', marginBottom: 0 }}>
          {p.sections.neutral.palmCallout.items.map((item, i) => (
            <li key={i}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      </div>
      <FloatVsPlantDiagram />
      <div className="callout">
        <strong>{p.sections.neutral.selfCheck.title}</strong> {p.sections.neutral.selfCheck.body}
      </div>

      <h2>{p.sections.geometry.heading}</h2>
      <BulletList bullets={p.sections.geometry.bullets} />
      <DeskGeometryDiagram />

      <h2>{p.sections.breaks.heading}</h2>
      <BulletList bullets={p.sections.breaks.bullets} />

      <h2>{p.sections.alice.heading}</h2>
      <BulletList bullets={p.sections.alice.bullets} />

      <h2>{p.sections.doctor.heading}</h2>
      <div className="callout warn">
        <Rich text={p.sections.doctor.intro} />
        <ul style={{ marginTop: '0.4rem', marginBottom: 0 }}>
          {p.sections.doctor.symptoms.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <p style={{ marginTop: '0.6rem', marginBottom: 0 }}>
          <Rich text={p.sections.doctor.outro} />
        </p>
      </div>

      <h2>{p.furtherReadingHeading}</h2>
      <ul>
        {p.furtherReading.map((r, i) => {
          const srcKey = ['mayo', 'osha', 'nhs'][i] as keyof typeof SRC;
          const href = SRC[srcKey].href;
          return (
            <li key={i}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {r.label}
              </a>
              : {r.body}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

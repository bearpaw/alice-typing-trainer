import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LESSONS, LessonDrill } from '../lib/lessons';
import { TypingArena, TypingStats } from '../components/TypingArena';
import { KeyboardView, SplitCallout } from '../components/KeyboardView';
import { loadLessonProgress, saveLessonResult } from '../lib/storage';
import { useSeo } from '../lib/seo';
import { useLocaleCtx } from '../lib/i18n/context';
import type { Messages } from '../lib/i18n/types';

function LessonCard({
  lesson,
  done,
  t,
  onOpen,
}: {
  lesson: LessonDrill;
  done: boolean;
  t: Messages;
  onOpen: (id: string) => void;
}) {
  const meta = t.lessons.items[lesson.id];
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onOpen(lesson.id);
      }}
      className={`lesson-card ${done ? 'done' : ''}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="num">{t.lessons.cardLabel}</div>
      <div className="title">{meta.title}</div>
      <div className="desc">{meta.desc}</div>
    </a>
  );
}

function LessonRunner({
  lesson,
  onExit,
}: {
  lesson: LessonDrill;
  onExit: () => void;
}) {
  const { t, locale } = useLocaleCtx();
  const meta = t.lessons.items[lesson.id];
  useSeo({
    title: `${meta.title} — ${t.seo.lesson.titleSuffix}`,
    description: `${meta.desc} ${t.seo.lesson.descSuffix}`,
    path: `/lessons/${lesson.id}`,
    locale,
  });
  const [nextChar, setNextChar] = useState<string | null>(lesson.drill[0] ?? null);
  const [stats, setStats] = useState<TypingStats | null>(null);
  const [finished, setFinished] = useState(false);
  const [wrongHit, setWrongHit] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleChange = useCallback(
    (s: {
      nextChar: string | null;
      stats: TypingStats;
      finished: boolean;
      wrongHit: boolean;
    }) => {
      setNextChar(s.nextChar);
      setStats(s.stats);
      setFinished(s.finished);
      setWrongHit(s.wrongHit);
    },
    [],
  );

  const handleComplete = useCallback(
    (s: TypingStats) => {
      saveLessonResult(lesson.id, s.wpm, s.accuracy);
    },
    [lesson.id],
  );

  const restart = () => {
    setResetKey((k) => k + 1);
    setFinished(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button onClick={onExit}>{t.lessons.backAll}</button>
        <h1 style={{ margin: 0 }}>{meta.title}</h1>
      </div>
      <p style={{ color: 'var(--text-dim)' }}>{meta.desc}</p>

      <div className="stats">
        <div className="stat">
          <div className="label">{t.lessons.stats.wpm}</div>
          <div className="value">{stats ? stats.wpm.toFixed(1) : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">{t.lessons.stats.accuracy}</div>
          <div className="value">{stats ? `${stats.accuracy.toFixed(1)}%` : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">{t.lessons.stats.time}</div>
          <div className="value">{stats ? (stats.elapsedMs / 1000).toFixed(1) + 's' : '—'}</div>
        </div>
      </div>

      <TypingArena
        prompt={lesson.drill}
        onChange={handleChange}
        onComplete={handleComplete}
        resetKey={resetKey}
      />

      <div className="keyboard-wrap">
        <KeyboardView highlightChar={nextChar} wrongHit={wrongHit} />
      </div>
      <SplitCallout char={nextChar} />

      {finished && stats && (
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0 }}>{t.lessons.complete}</h3>
          <div className="results">
            <div className="big">
              {stats.wpm.toFixed(1)} <small>{t.lessons.stats.wpm}</small>
            </div>
            <div className="big">
              {stats.accuracy.toFixed(1)}
              <small>% {t.lessons.stats.accuracy.toLowerCase()}</small>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="primary" onClick={restart}>
              {t.lessons.retry}
            </button>
            <button onClick={onExit}>{t.lessons.backToLessons}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function LessonIndex({ onOpen }: { onOpen: (id: string) => void }) {
  const { t, locale } = useLocaleCtx();
  useSeo({
    title: t.seo.lessons.title,
    description: t.seo.lessons.description,
    path: '/lessons',
    locale,
  });
  const progress = useMemo(() => loadLessonProgress(), []);
  return (
    <div>
      <h1>{t.lessons.indexTitle}</h1>
      <p style={{ color: 'var(--text-dim)' }}>{t.lessons.indexIntro}</p>
      <div className="lesson-grid">
        {LESSONS.map((l) => (
          <LessonCard
            key={l.id}
            lesson={l}
            done={!!progress[l.id]?.bestWpm}
            t={t}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  );
}

export function Lessons() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, localizedPath } = useLocaleCtx();

  if (id) {
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) {
      return (
        <div>
          <h1>{t.lessons.notFound}</h1>
          <button onClick={() => navigate(localizedPath('/lessons'))}>{t.lessons.backAll}</button>
        </div>
      );
    }
    return <LessonRunner lesson={lesson} onExit={() => navigate(localizedPath('/lessons'))} />;
  }

  return <LessonIndex onOpen={(lid) => navigate(localizedPath(`/lessons/${lid}`))} />;
}

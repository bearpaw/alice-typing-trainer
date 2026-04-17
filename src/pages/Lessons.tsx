import { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LESSONS, Lesson } from '../lib/lessons';
import { TypingArena, TypingStats } from '../components/TypingArena';
import { KeyboardView, SplitCallout } from '../components/KeyboardView';
import { loadLessonProgress, saveLessonResult } from '../lib/storage';

function LessonCard({ lesson, done }: { lesson: Lesson; done: boolean }) {
  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className={`lesson-card ${done ? 'done' : ''}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="num">Lesson</div>
      <div className="title">{lesson.title}</div>
      <div className="desc">{lesson.desc}</div>
    </Link>
  );
}

function LessonRunner({ lesson, onExit }: { lesson: Lesson; onExit: () => void }) {
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
        <button onClick={onExit}>← All lessons</button>
        <h1 style={{ margin: 0 }}>{lesson.title}</h1>
      </div>
      <p style={{ color: 'var(--text-dim)' }}>{lesson.desc}</p>

      <div className="stats">
        <div className="stat">
          <div className="label">WPM</div>
          <div className="value">{stats ? stats.wpm.toFixed(1) : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">Accuracy</div>
          <div className="value">{stats ? `${stats.accuracy.toFixed(1)}%` : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">Time</div>
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
          <h3 style={{ marginTop: 0 }}>Lesson complete</h3>
          <div className="results">
            <div className="big">
              {stats.wpm.toFixed(1)} <small>WPM</small>
            </div>
            <div className="big">
              {stats.accuracy.toFixed(1)}
              <small>% accuracy</small>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="primary" onClick={restart}>
              Retry
            </button>
            <button onClick={onExit}>Back to lessons</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Lessons() {
  const { id } = useParams();
  const navigate = useNavigate();
  const progress = useMemo(() => loadLessonProgress(), []);

  if (id) {
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) {
      return (
        <div>
          <h1>Lesson not found</h1>
          <button onClick={() => navigate('/lessons')}>← All lessons</button>
        </div>
      );
    }
    return <LessonRunner lesson={lesson} onExit={() => navigate('/lessons')} />;
  }

  return (
    <div>
      <h1>Guided lessons</h1>
      <p style={{ color: 'var(--text-dim)' }}>
        Work through these in order. Lesson 5 and 6 are the most important for un-learning
        row-staggered habits on an Alice board.
      </p>
      <div className="lesson-grid">
        {LESSONS.map((l) => (
          <LessonCard key={l.id} lesson={l} done={!!progress[l.id]?.bestWpm} />
        ))}
      </div>
    </div>
  );
}

import { useCallback, useMemo, useState } from 'react';
import { TypingArena, TypingStats } from '../components/TypingArena';
import { KeyboardView, SplitCallout } from '../components/KeyboardView';
import { pickRandomQuote } from '../lib/lessons';
import { appendHistory, clearHistory, loadHistory, TestResult } from '../lib/storage';
import { Sparkline } from '../components/Sparkline';
import { useSeo } from '../lib/seo';
import { useLocaleCtx } from '../lib/i18n/context';

const DURATIONS = [30, 60, 120] as const;

export function Test() {
  const { t, locale } = useLocaleCtx();
  useSeo({
    title: t.seo.test.title,
    description: t.seo.test.description,
    path: '/test',
    locale,
  });
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>(60);
  const [quote, setQuote] = useState(pickRandomQuote);
  const [resetKey, setResetKey] = useState(0);
  const [nextChar, setNextChar] = useState<string | null>(quote[0] ?? null);
  const [stats, setStats] = useState<TypingStats | null>(null);
  const [finished, setFinished] = useState(false);
  const [wrongHit, setWrongHit] = useState(false);
  const [history, setHistory] = useState<TestResult[]>(() => loadHistory());

  const onChange = useCallback(
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

  const onComplete = useCallback(
    (s: TypingStats) => {
      const result: TestResult = {
        timestamp: Date.now(),
        wpm: Number(s.wpm.toFixed(2)),
        accuracy: Number(s.accuracy.toFixed(2)),
        durationSec: duration,
      };
      setHistory(appendHistory(result));
    },
    [duration],
  );

  const restart = (newQuote = true) => {
    if (newQuote) setQuote(pickRandomQuote());
    setResetKey((k) => k + 1);
    setFinished(false);
    setStats(null);
  };

  const timeLeft = useMemo(() => {
    if (!stats) return duration;
    const left = duration - stats.elapsedMs / 1000;
    return Math.max(0, left);
  }, [stats, duration]);

  const recent = history.slice(-20);
  const wpmSeries = recent.map((r) => r.wpm);

  return (
    <div>
      <h1>{t.test.title}</h1>
      <p style={{ color: 'var(--text-dim)' }}>{t.test.intro}</p>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.test.duration}</span>
        <div className="segmented">
          {DURATIONS.map((d) => (
            <button
              key={d}
              className={d === duration ? 'active' : ''}
              onClick={() => {
                setDuration(d);
                restart(true);
              }}
            >
              {d}s
            </button>
          ))}
        </div>
        <button onClick={() => restart(true)}>{t.test.newQuote}</button>
        <button onClick={() => restart(false)}>{t.test.retrySame}</button>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="label">{t.test.timeLeft}</div>
          <div className="value">{timeLeft.toFixed(1)}s</div>
        </div>
        <div className="stat">
          <div className="label">{t.test.wpm}</div>
          <div className="value">{stats ? stats.wpm.toFixed(1) : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">{t.test.accuracy}</div>
          <div className="value">{stats ? `${stats.accuracy.toFixed(1)}%` : '—'}</div>
        </div>
      </div>

      <TypingArena
        prompt={quote}
        onChange={onChange}
        onComplete={onComplete}
        timeLimitMs={duration * 1000}
        resetKey={`${resetKey}-${duration}`}
      />

      <div className="keyboard-wrap">
        <KeyboardView highlightChar={nextChar} wrongHit={wrongHit} />
      </div>
      <SplitCallout char={nextChar} />

      {finished && stats && (
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ marginTop: 0 }}>{t.test.result}</h3>
          <div className="results">
            <div className="big">
              {stats.wpm.toFixed(1)} <small>{t.test.wpm}</small>
            </div>
            <div className="big">
              {stats.accuracy.toFixed(1)}
              <small>% {t.test.accuracy.toLowerCase()}</small>
            </div>
            <div className="big">
              {stats.correctChars}
              <small>{t.test.charsCorrect}</small>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="primary" onClick={() => restart(true)}>
              {t.test.newTest}
            </button>
            <button onClick={() => restart(false)}>{t.test.retrySame}</button>
          </div>
        </div>
      )}

      <h2>{t.test.historyHeading}</h2>
      <Sparkline values={wpmSeries} />
      {history.length > 0 && (
        <>
          <table className="history" style={{ marginTop: '0.75rem' }}>
            <thead>
              <tr>
                <th>{t.test.tableCols.when}</th>
                <th>{t.test.tableCols.duration}</th>
                <th>{t.test.tableCols.wpm}</th>
                <th>{t.test.tableCols.accuracy}</th>
              </tr>
            </thead>
            <tbody>
              {[...history]
                .reverse()
                .slice(0, 10)
                .map((r) => (
                  <tr key={r.timestamp}>
                    <td>{new Date(r.timestamp).toLocaleString(locale)}</td>
                    <td>{r.durationSec}s</td>
                    <td>{r.wpm.toFixed(1)}</td>
                    <td>{r.accuracy.toFixed(1)}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            style={{ marginTop: '0.75rem' }}
            onClick={() => {
              if (confirm(t.test.clearConfirm)) {
                clearHistory();
                setHistory([]);
              }
            }}
          >
            {t.test.clearHistory}
          </button>
        </>
      )}
    </div>
  );
}

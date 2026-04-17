import { useCallback, useMemo, useState } from 'react';
import { TypingArena, TypingStats } from '../components/TypingArena';
import { KeyboardView, SplitCallout } from '../components/KeyboardView';
import { pickRandomQuote } from '../lib/lessons';
import { appendHistory, clearHistory, loadHistory, TestResult } from '../lib/storage';
import { Sparkline } from '../components/Sparkline';
import { useSeo } from '../lib/seo';

const DURATIONS = [30, 60, 120] as const;

export function Test() {
  useSeo({
    title: 'Alice Layout Typing Speed Test — WPM & Accuracy',
    description:
      'Timed 30, 60, or 120 second WPM and accuracy typing test for Alice-layout keyboards. Track your progress locally in your browser — no signup, no data leaves your device.',
    path: '/test',
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
      <h1>Speed test</h1>
      <p style={{ color: 'var(--text-dim)' }}>
        Timed WPM + accuracy. Results are saved in your browser's localStorage — nothing leaves
        this device.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Duration:</span>
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
        <button onClick={() => restart(true)}>New quote</button>
        <button onClick={() => restart(false)}>Retry same</button>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="label">Time left</div>
          <div className="value">{timeLeft.toFixed(1)}s</div>
        </div>
        <div className="stat">
          <div className="label">WPM</div>
          <div className="value">{stats ? stats.wpm.toFixed(1) : '—'}</div>
        </div>
        <div className="stat">
          <div className="label">Accuracy</div>
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
          <h3 style={{ marginTop: 0 }}>Result</h3>
          <div className="results">
            <div className="big">
              {stats.wpm.toFixed(1)} <small>WPM</small>
            </div>
            <div className="big">
              {stats.accuracy.toFixed(1)}
              <small>% accuracy</small>
            </div>
            <div className="big">
              {stats.correctChars}
              <small>chars typed correctly</small>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="primary" onClick={() => restart(true)}>
              New test
            </button>
            <button onClick={() => restart(false)}>Retry same quote</button>
          </div>
        </div>
      )}

      <h2>Your history</h2>
      <Sparkline values={wpmSeries} />
      {history.length > 0 && (
        <>
          <table className="history" style={{ marginTop: '0.75rem' }}>
            <thead>
              <tr>
                <th>When</th>
                <th>Duration</th>
                <th>WPM</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {[...history]
                .reverse()
                .slice(0, 10)
                .map((r) => (
                  <tr key={r.timestamp}>
                    <td>{new Date(r.timestamp).toLocaleString()}</td>
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
              if (confirm('Clear all typing test history?')) {
                clearHistory();
                setHistory([]);
              }
            }}
          >
            Clear history
          </button>
        </>
      )}
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { wpm as calcWpm, accuracy as calcAccuracy } from '../lib/wpm';

export type TypingStats = {
  wpm: number;
  accuracy: number;
  correctChars: number;
  totalKeystrokes: number;
  elapsedMs: number;
};

type Props = {
  prompt: string;
  onChange?: (state: {
    nextChar: string | null;
    stats: TypingStats;
    finished: boolean;
    wrongHit: boolean;
  }) => void;
  onComplete?: (stats: TypingStats) => void;
  timeLimitMs?: number;
  resetKey?: string | number;
};

const FLASH_MS = 220;

export function TypingArena({ prompt, onChange, onComplete, timeLimitMs, resetKey }: Props) {
  const [typed, setTyped] = useState('');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());
  const [finished, setFinished] = useState(false);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [focused, setFocused] = useState(false);
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const flashTimer = useRef<number | null>(null);

  useEffect(() => {
    setTyped('');
    setStartedAt(null);
    setNow(Date.now());
    setFinished(false);
    setTotalKeystrokes(0);
    setFlash(null);
    inputRef.current?.focus();
  }, [resetKey, prompt]);

  useEffect(() => {
    return () => {
      if (flashTimer.current) window.clearTimeout(flashTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!startedAt || finished) return;
    const id = window.setInterval(() => setNow(Date.now()), 200);
    return () => window.clearInterval(id);
  }, [startedAt, finished]);

  const correctChars = useMemo(() => {
    let n = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === prompt[i]) n++;
    }
    return n;
  }, [typed, prompt]);

  const elapsedMs = startedAt ? (finished ? (now - startedAt) : now - startedAt) : 0;
  const stats: TypingStats = useMemo(
    () => ({
      wpm: calcWpm(correctChars, elapsedMs),
      accuracy: calcAccuracy(correctChars, totalKeystrokes),
      correctChars,
      totalKeystrokes,
      elapsedMs,
    }),
    [correctChars, elapsedMs, totalKeystrokes],
  );

  useEffect(() => {
    if (finished) return;
    if (timeLimitMs && startedAt && now - startedAt >= timeLimitMs) {
      setFinished(true);
    } else if (typed.length >= prompt.length) {
      setFinished(true);
    }
  }, [typed, prompt, timeLimitMs, startedAt, now, finished]);

  const firedCompleteRef = useRef(false);
  useEffect(() => {
    if (finished && !firedCompleteRef.current) {
      firedCompleteRef.current = true;
      onComplete?.(stats);
    }
    if (!finished) firedCompleteRef.current = false;
  }, [finished, onComplete, stats]);

  const nextChar = finished ? null : prompt[typed.length] ?? null;

  const wrongHit = flash === 'wrong';
  useEffect(() => {
    onChange?.({ nextChar, stats, finished, wrongHit });
  }, [nextChar, stats, finished, wrongHit, onChange]);

  const triggerFlash = (kind: 'correct' | 'wrong') => {
    setFlash(kind);
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(null), FLASH_MS);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (finished) return;
    const value = e.target.value;
    if (!startedAt && value.length > 0) {
      setStartedAt(Date.now());
      setNow(Date.now());
    }
    const delta = value.length - typed.length;
    if (delta > 0) {
      setTotalKeystrokes((k) => k + delta);
      const newChars = value.slice(typed.length, typed.length + delta);
      const expectedChars = prompt.slice(typed.length, typed.length + delta);
      triggerFlash(newChars === expectedChars ? 'correct' : 'wrong');
    }
    setTyped(value.slice(0, prompt.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') e.preventDefault();
  };

  const focus = () => inputRef.current?.focus();

  return (
    <div onClick={focus}>
      <div
        className={`prompt ${flash === 'correct' ? 'hit-correct' : ''} ${
          flash === 'wrong' ? 'hit-wrong' : ''
        }`}
        aria-live="polite"
      >
        {prompt.split('').map((c, i) => {
          let cls = 'char';
          if (c === ' ') cls += ' space';
          if (i < typed.length) {
            cls += typed[i] === c ? ' correct' : ' wrong';
          } else if (i === typed.length) {
            cls += ' current';
          }
          return (
            <span key={i} className={cls}>
              {c === ' ' ? '\u00A0' : c}
            </span>
          );
        })}
      </div>
      {!focused && (
        <div className="focus-hint">Click the text above to focus, then start typing.</div>
      )}
      <input
        ref={inputRef}
        className="hidden-input"
        type="text"
        value={typed}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        aria-label="Typing input"
      />
    </div>
  );
}

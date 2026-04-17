import { Link } from 'react-router-dom';
import { KeyboardView } from '../components/KeyboardView';

export function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Learn your Alice layout.</h1>
        <p>
          Alice-layout keyboards split the two halves and angle them inward so your wrists stay
          neutral. The tricky part is retraining the keys that now live on a different hand than
          on a row-staggered keyboard: <strong>B, T, G</strong> are always <em>left</em>, and{' '}
          <strong>Y, H, N</strong> are always <em>right</em>. This app helps you build that muscle
          memory.
        </p>
      </div>

      <div className="row">
        <Link to="/posture" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>🧘 Posture &amp; ergonomics</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            Wrist-neutral posture, desk setup, micro-breaks, and when to worry about carpal tunnel.
          </p>
        </Link>
        <Link to="/lessons" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>📚 Guided lessons</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            Eight progressive drills, starting with home row and working up to split-sensitive
            keys and full sentences.
          </p>
        </Link>
        <Link to="/test" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>⏱ Speed test</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            Timed WPM + accuracy test. Progress saved locally so you can watch yourself improve.
          </p>
        </Link>
      </div>

      <h2>Your keyboard</h2>
      <p style={{ color: 'var(--text-dim)' }}>
        Finger-zone coloring. Keys with a <strong style={{ color: 'var(--warn)' }}>yellow</strong>{' '}
        border are the split-sensitive ones.
      </p>
      <div className="keyboard-wrap">
        <KeyboardView highlightChar={null} />
      </div>
    </div>
  );
}

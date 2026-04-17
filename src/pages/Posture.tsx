import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

export function Posture() {
  useSeo({
    title: 'Alice Keyboard Posture & Ergonomics — Prevent Wrist Pain',
    description:
      'Wrist-neutral typing posture, desk and chair setup, micro-break routines, and carpal tunnel prevention tips for Alice-layout keyboard users.',
    path: '/posture',
  });
  return (
    <div className="posture">
      <h1>Alice keyboard posture &amp; ergonomics</h1>
      <p style={{ color: 'var(--text-dim)' }}>
        A split Alice keyboard only helps if the rest of your setup cooperates. Here's a practical
        checklist, ordered roughly from most to least impactful for wrist pain and carpal tunnel
        risk.
      </p>

      <h2>1. Keep your wrists neutral</h2>
      <ul>
        <li>
          <strong>Straight, not bent up or down.</strong> Your forearm and the back of your hand
          should form a roughly straight line. Wrist extension (bending up) is the single biggest
          contributor to median nerve compression.
        </li>
        <li>
          <strong>Straight, not bent sideways.</strong> No ulnar deviation (pinky-ward bend).
          Alice layouts exist precisely because angling the halves inward lets your hands land
          without that sideways twist. Let the angle do its job — don't fight it by holding your
          elbows unnaturally close to your body.
        </li>
        <li>
          <strong>Float, don't plant.</strong> Resting your wrists on the desk or a hard wrist rest{' '}
          <em>while typing</em> puts pressure directly on the carpal tunnel. Use a wrist rest as a
          landing pad between bursts of typing, not during.
        </li>
      </ul>
      <div className="callout">
        <strong>Quick self-check:</strong> press the back of your hand against a wall, elbow bent.
        Is your forearm parallel to the floor and your hand straight? That's typing posture. If you
        have to crank your wrist to make it happen, your desk or chair height is off.
      </div>

      <h2>2. Dial in chair, desk, and monitor</h2>
      <ul>
        <li>
          <strong>Elbows at ~90°</strong>, or slightly more open (100–110°). Adjust chair height
          first, keyboard height second.
        </li>
        <li>
          <strong>Shoulders relaxed, not hiked.</strong> If the keyboard is too high you'll shrug
          all day and wake up with neck pain.
        </li>
        <li>
          <strong>Monitor top at or just below eye level</strong>, an arm's length away. Looking
          down at a laptop screen drags your head forward and feeds into shoulder/wrist tension.
        </li>
        <li>
          <strong>Feet flat on the floor or a footrest.</strong>
        </li>
      </ul>

      <h2>3. Take micro-breaks</h2>
      <ul>
        <li>
          <strong>Every ~25–30 minutes</strong>, take 30 seconds off the keyboard. Stand, shake
          out your hands, roll your shoulders.
        </li>
        <li>
          <strong>20-20-20 for eyes:</strong> every 20 minutes, look at something 20 feet away for
          20 seconds. It resets focus and breaks the hunched-forward posture that loads the wrists.
        </li>
        <li>
          <strong>Wrist circles and prayer stretch:</strong> clasp hands, press palms together,
          lower hands slowly until you feel a gentle stretch in the forearms. Hold 15–30 seconds.
        </li>
      </ul>

      <h2>4. Tips specific to the Alice layout</h2>
      <ul>
        <li>
          <strong>Let the angle work for you.</strong> Your hands should rest so that forearms
          point along the column lines, not perpendicular to the desk edge.
        </li>
        <li>
          <strong>Anchor on the home row bumps</strong> (F and J). It's very easy to drift on an
          Alice board because the halves are fixed but your hands float.
        </li>
        <li>
          <strong>Retrain split-sensitive keys deliberately.</strong> B, T, G are <em>left</em>.
          Y, H, N are <em>right</em>. If you're coming from a row-staggered board, you probably
          cross-hand one of these — usually Y with the left index or B with the right. See{' '}
          <Link to="/lessons/bottom-alice">Lesson 5</Link> and{' '}
          <Link to="/lessons/split-sensitive">Lesson 6</Link>.
        </li>
        <li>
          <strong>Tenting helps too.</strong> Most Alice boards are flat, but a slight forward
          tilt (front edge lower than back) or some foam under the center can reduce pronation
          strain.
        </li>
      </ul>

      <h2>5. When to see a doctor</h2>
      <div className="callout warn">
        Don't tough it out. See a professional if you have:
        <ul style={{ marginTop: '0.4rem', marginBottom: 0 }}>
          <li>Numbness or tingling in the thumb, index, middle, or half of the ring finger.</li>
          <li>Pain that wakes you up at night or lingers for days after typing.</li>
          <li>Weakness gripping things, or dropping objects.</li>
        </ul>
        Early intervention (splinting, posture changes, physical therapy) is much more effective
        than waiting. Carpal tunnel syndrome is progressive if ignored.
      </div>

      <h2>Further reading</h2>
      <ul>
        <li>
          <a
            href="https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome/symptoms-causes/syc-20355603"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayo Clinic — Carpal Tunnel Syndrome
          </a>
          : symptoms, causes, and treatment.
        </li>
        <li>
          <a
            href="https://www.osha.gov/etools/computer-workstations"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSHA — Computer Workstations eTool
          </a>
          : detailed ergonomic checklist.
        </li>
        <li>
          <a
            href="https://www.nhs.uk/conditions/carpal-tunnel-syndrome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS — Carpal Tunnel Syndrome
          </a>
          : UK clinical overview, including stretches.
        </li>
      </ul>
    </div>
  );
}

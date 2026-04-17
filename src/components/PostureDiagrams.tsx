type PanelProps = {
  label: string;
  ok: boolean;
  children: React.ReactNode;
};

function Panel({ label, ok, children }: PanelProps) {
  return (
    <figure className={`diagram-panel ${ok ? 'ok' : 'bad'}`}>
      <div className="diagram-panel-art">{children}</div>
      <figcaption>
        <span className="diagram-mark" aria-hidden="true">{ok ? '✓' : '✗'}</span> {label}
      </figcaption>
    </figure>
  );
}

const FOREARM_FILL = 'var(--bg-elev-2)';
const FOREARM_STROKE = 'var(--text-dim)';

export function WristNeutralDiagram() {
  return (
    <div className="diagram-row" aria-label="Wrist postures, side view">
      <Panel label="Extension (bad)" ok={false}>
        <WristSide angle={-40} tone="bad" />
      </Panel>
      <Panel label="Neutral (good)" ok>
        <WristSide angle={0} tone="good" />
      </Panel>
      <Panel label="Flexion (bad)" ok={false}>
        <WristSide angle={34} tone="bad" />
      </Panel>
    </div>
  );
}

function WristSide({ angle, tone }: { angle: number; tone: 'good' | 'bad' }) {
  const color = tone === 'good' ? 'var(--good)' : 'var(--bad)';
  return (
    <svg viewBox="0 0 220 140" role="img" aria-label={`Side view of wrist at ${angle} degrees`}>
      {/* Forearm */}
      <rect x="10" y="55" width="105" height="32" rx="10" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
      {/* Hand — rotates around the wrist joint (115, 71) */}
      <g transform={`rotate(${angle} 115 71)`}>
        <rect x="115" y="55" width="85" height="32" rx="10" fill={FOREARM_FILL} stroke={color} strokeWidth="2.5" />
        {/* Knuckles hint */}
        <line x1="192" y1="63" x2="198" y2="63" stroke={FOREARM_STROKE} strokeWidth="1.5" />
        <line x1="192" y1="71" x2="198" y2="71" stroke={FOREARM_STROKE} strokeWidth="1.5" />
        <line x1="192" y1="79" x2="198" y2="79" stroke={FOREARM_STROKE} strokeWidth="1.5" />
      </g>
      {/* Wrist joint */}
      <circle cx="115" cy="71" r="4" fill={color} />
      {/* Forearm label */}
      <text x="62" y="108" fontSize="10" fill="var(--text-dim)" textAnchor="middle">forearm</text>
      <text x="160" y="128" fontSize="10" fill="var(--text-dim)" textAnchor="middle">hand</text>
    </svg>
  );
}

export function UlnarDeviationDiagram() {
  return (
    <div className="diagram-row" aria-label="Ulnar deviation, top-down view">
      <Panel label="Row-staggered — ulnar deviation" ok={false}>
        <TopDownWrists alice={false} />
      </Panel>
      <Panel label="Alice layout — neutral" ok>
        <TopDownWrists alice />
      </Panel>
    </div>
  );
}

function TopDownWrists({ alice }: { alice: boolean }) {
  const color = alice ? 'var(--good)' : 'var(--bad)';
  const forearmAngle = alice ? 12 : 0;
  const handAngle = alice ? 12 : 22;
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label={alice ? 'Alice neutral' : 'Ulnar deviation'}>
      {/* Keyboard outline */}
      <rect x="20" y="125" width="220" height="60" rx="10" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1.5" />
      {/* Split hint: center gap on Alice panel */}
      {alice && (
        <line x1="130" y1="125" x2="130" y2="185" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
      )}

      {/* Left arm */}
      <g transform={`rotate(${-forearmAngle} 80 0)`}>
        <rect x="65" y="0" width="30" height="110" rx="10" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
      </g>
      {/* Left hand */}
      <g transform={`rotate(${-handAngle} 80 115)`}>
        <rect x="62" y="115" width="36" height="45" rx="8" fill={FOREARM_FILL} stroke={color} strokeWidth="2.5" />
      </g>
      <circle cx="80" cy="115" r="3.5" fill={color} />

      {/* Right arm */}
      <g transform={`rotate(${forearmAngle} 180 0)`}>
        <rect x="165" y="0" width="30" height="110" rx="10" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
      </g>
      {/* Right hand */}
      <g transform={`rotate(${handAngle} 180 115)`}>
        <rect x="162" y="115" width="36" height="45" rx="8" fill={FOREARM_FILL} stroke={color} strokeWidth="2.5" />
      </g>
      <circle cx="180" cy="115" r="3.5" fill={color} />
    </svg>
  );
}

export function FloatVsPlantDiagram() {
  return (
    <div className="diagram-row" aria-label="Floating versus planted wrists">
      <Panel label="Float while typing" ok>
        <ArmOnDesk planted={false} />
      </Panel>
      <Panel label="Plant while typing" ok={false}>
        <ArmOnDesk planted />
      </Panel>
    </div>
  );
}

function ArmOnDesk({ planted }: { planted: boolean }) {
  const color = planted ? 'var(--bad)' : 'var(--good)';
  const armY = planted ? 95 : 70;
  return (
    <svg viewBox="0 0 260 160" role="img" aria-label={planted ? 'Wrist planted on desk' : 'Wrist floating above desk'}>
      {/* Desk */}
      <rect x="0" y="120" width="260" height="8" fill="var(--text-dim)" opacity="0.4" />
      {/* Keyboard */}
      <rect x="150" y="108" width="90" height="16" rx="4" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1.5" />
      {/* Key hints */}
      <line x1="165" y1="116" x2="225" y2="116" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 2" />

      {/* Forearm */}
      <rect x="20" y={armY} width="130" height="24" rx="10" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
      {/* Hand tilted onto keyboard */}
      <g transform={`rotate(-18 150 ${armY + 12})`}>
        <rect x="150" y={armY} width="70" height="24" rx="10" fill={FOREARM_FILL} stroke={color} strokeWidth="2.5" />
      </g>
      <circle cx="150" cy={armY + 12} r="4" fill={color} />

      {planted ? (
        <>
          {/* Pressure indicator on wrist */}
          <path d="M140 92 L150 82 L160 92" fill="none" stroke="var(--bad)" strokeWidth="2" />
          <text x="150" y="78" fontSize="10" fill="var(--bad)" textAnchor="middle" fontWeight="600">pressure</text>
        </>
      ) : (
        <>
          {/* Gap indicator */}
          <line x1="150" y1={armY + 24} x2="150" y2="118" stroke="var(--good)" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="162" y="108" fontSize="10" fill="var(--good)" fontWeight="600">gap</text>
        </>
      )}
    </svg>
  );
}

export function DeskGeometryDiagram() {
  return (
    <div className="diagram-solo" aria-label="Desk, chair, and monitor geometry">
      <svg viewBox="0 0 420 260" role="img" aria-label="Side-view desk setup">
        {/* Floor */}
        <line x1="0" y1="240" x2="420" y2="240" stroke="var(--text-dim)" strokeWidth="1.5" />

        {/* Chair seat + back */}
        <rect x="40" y="170" width="90" height="10" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="40" y="110" width="10" height="65" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1.5" />
        <line x1="85" y1="180" x2="85" y2="240" stroke="var(--border)" strokeWidth="2" />

        {/* Person — head, torso, upper arm, forearm, thigh, calf */}
        <circle cx="78" cy="85" r="16" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
        {/* Torso */}
        <rect x="60" y="102" width="36" height="70" rx="10" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
        {/* Upper arm */}
        <rect x="80" y="115" width="48" height="14" rx="6" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
        {/* Forearm horizontal toward keyboard */}
        <rect x="118" y="122" width="100" height="14" rx="6" fill={FOREARM_FILL} stroke="var(--good)" strokeWidth="2.5" />
        {/* Elbow joint */}
        <circle cx="128" cy="129" r="4" fill="var(--good)" />
        {/* Thigh */}
        <rect x="76" y="165" width="78" height="14" rx="6" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />
        {/* Calf */}
        <rect x="142" y="175" width="14" height="65" rx="6" fill={FOREARM_FILL} stroke={FOREARM_STROKE} strokeWidth="2" />

        {/* Desk */}
        <rect x="200" y="140" width="180" height="6" fill="var(--text-dim)" opacity="0.4" />
        <line x1="210" y1="146" x2="210" y2="240" stroke="var(--text-dim)" strokeWidth="1" opacity="0.4" />
        <line x1="370" y1="146" x2="370" y2="240" stroke="var(--text-dim)" strokeWidth="1" opacity="0.4" />
        {/* Keyboard on desk */}
        <rect x="220" y="133" width="90" height="8" rx="2" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1" />

        {/* Monitor on desk */}
        <rect x="300" y="60" width="70" height="80" rx="3" fill="var(--bg-elev-2)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="330" y="140" width="10" height="6" fill="var(--border)" />

        {/* Eye level line */}
        <line x1="78" y1="85" x2="330" y2="85" stroke="var(--good)" strokeWidth="1" strokeDasharray="4 3" />
        <text x="200" y="78" fontSize="10" fill="var(--good)" textAnchor="middle" fontWeight="600">eye level — monitor top at or just below</text>

        {/* Elbow angle callout */}
        <text x="118" y="150" fontSize="10" fill="var(--good)" fontWeight="600">~90° elbow</text>

        {/* Feet flat callout */}
        <text x="150" y="232" fontSize="10" fill="var(--good)" fontWeight="600">feet flat</text>
      </svg>
    </div>
  );
}

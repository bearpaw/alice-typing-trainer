import { leftHalf, rightHalf, FINGER_COLOR, Key, keyFor } from '../lib/aliceLayout';

type Props = {
  highlightChar: string | null;
  width?: number;
  wrongHit?: boolean;
};

const UNIT = 44;
const GAP = 4;
const ROW_H = UNIT + GAP;

function KeyRect({
  k,
  highlight,
  wrongHit,
}: {
  k: Key;
  highlight: boolean;
  wrongHit: boolean;
}) {
  const w = (k.width ?? 1) * UNIT + ((k.width ?? 1) - 1) * GAP;
  const x = k.col * (UNIT + GAP);
  const y = k.row * ROW_H;
  const bg = FINGER_COLOR[k.finger];
  const label = k.label ?? (k.char.length === 1 ? k.char.toUpperCase() : k.char);
  const wrongOnThis = highlight && wrongHit;
  const stroke = wrongOnThis
    ? 'var(--bad)'
    : highlight
      ? 'var(--key-highlight-stroke)'
      : k.splitSensitive
        ? 'var(--warn)'
        : 'var(--border)';
  const strokeWidth = wrongOnThis ? 3 : highlight ? 2.5 : k.splitSensitive ? 1.5 : 1;
  return (
    <g transform={`translate(${x} ${y})`}>
      {wrongOnThis && (
        <rect
          width={w + 8}
          height={UNIT + 8}
          x={-4}
          y={-4}
          rx={9}
          fill="var(--bad)"
          fillOpacity={0.25}
        />
      )}
      <rect
        width={w}
        height={UNIT}
        rx={6}
        fill={wrongOnThis ? 'var(--bad)' : bg}
        fillOpacity={wrongOnThis ? 0.85 : highlight ? 1 : 0.18}
        stroke={stroke}
        strokeWidth={strokeWidth}
      >
        {highlight && !wrongOnThis && (
          <animate
            attributeName="fill-opacity"
            values="1;0.55;1"
            dur="0.9s"
            repeatCount="indefinite"
          />
        )}
      </rect>
      <text
        x={w / 2}
        y={UNIT / 2 + 4}
        textAnchor="middle"
        fontSize={label.length > 2 ? 10 : 14}
        fontFamily="ui-monospace, Menlo, monospace"
        fontWeight={highlight ? 700 : 500}
        fill={wrongOnThis ? 'var(--wrong-text)' : highlight ? 'var(--key-highlight-text)' : 'var(--text)'}
      >
        {label}
      </text>
    </g>
  );
}

function halfExtents(keys: Key[]) {
  let maxRight = 0;
  let maxBottom = 0;
  for (const k of keys) {
    const w = (k.width ?? 1) * UNIT + ((k.width ?? 1) - 1) * GAP;
    const right = k.col * (UNIT + GAP) + w;
    const bottom = k.row * ROW_H + UNIT;
    if (right > maxRight) maxRight = right;
    if (bottom > maxBottom) maxBottom = bottom;
  }
  return { w: maxRight, h: maxBottom };
}

export function KeyboardView({ highlightChar, width = 920, wrongHit = false }: Props) {
  const left = halfExtents(leftHalf);
  const right = halfExtents(rightHalf);

  const highlightKey = highlightChar ? keyFor(highlightChar) : null;
  const angle = 10;

  const gap = 40;
  const halfH = Math.max(left.h, right.h);

  const rad = (angle * Math.PI) / 180;
  const leftRotW = left.w * Math.cos(rad) + left.h * Math.sin(rad);
  const rightRotW = right.w * Math.cos(rad) + right.h * Math.sin(rad);
  const rotH = Math.max(
    left.h * Math.cos(rad) + left.w * Math.sin(rad),
    right.h * Math.cos(rad) + right.w * Math.sin(rad),
  );
  const totalW = leftRotW + gap + rightRotW;

  const isHighlight = (k: Key) =>
    !!highlightKey &&
    highlightKey.char === k.char &&
    highlightKey.hand === k.hand &&
    highlightKey.row === k.row;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${rotH + 20}`}
      width={width}
      style={{ maxWidth: '100%', height: 'auto' }}
      role="img"
      aria-label="Alice layout keyboard"
    >
      <g transform={`translate(${left.h * Math.sin(rad)} 0) rotate(-${angle} 0 ${halfH / 2})`}>
        {leftHalf.map((k) => (
          <KeyRect key={`L-${k.row}-${k.col}-${k.char}`} k={k} highlight={isHighlight(k)} wrongHit={wrongHit} />
        ))}
      </g>
      <g
        transform={`translate(${leftRotW + gap} 0) rotate(${angle} ${right.w} ${halfH / 2})`}
      >
        {rightHalf.map((k) => (
          <KeyRect key={`R-${k.row}-${k.col}-${k.char}`} k={k} highlight={isHighlight(k)} wrongHit={wrongHit} />
        ))}
      </g>
    </svg>
  );
}

export function SplitCallout({ char }: { char: string | null }) {
  if (!char) return null;
  const k = keyFor(char);
  if (!k || !k.splitSensitive) return null;
  const handLabel = k.hand === 'L' ? 'LEFT' : 'RIGHT';
  return (
    <div className="keyboard-caption">
      Split-sensitive — on Alice, <strong>{k.char.toUpperCase()}</strong> belongs to your{' '}
      <strong>{handLabel}</strong> {k.finger}.
    </div>
  );
}

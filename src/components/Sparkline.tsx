type Props = {
  values: number[];
  width?: number;
  height?: number;
  stroke?: string;
};

export function Sparkline({ values, width = 360, height = 80, stroke = 'var(--accent)' }: Props) {
  if (values.length === 0) {
    return (
      <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        No history yet — finish a test to see your trend.
      </div>
    );
  }
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = Math.max(max - min, 1);
  const pad = 6;
  const stepX = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;
  const toY = (v: number) => height - pad - ((v - min) / range) * (height - pad * 2);

  const points = values.map((v, i) => `${pad + i * stepX},${toY(v)}`).join(' ');
  const last = values[values.length - 1];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: '100%' }}>
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
      {values.map((v, i) => (
        <circle
          key={i}
          cx={pad + i * stepX}
          cy={toY(v)}
          r={i === values.length - 1 ? 3.5 : 2}
          fill={i === values.length - 1 ? stroke : 'var(--bg-elev-2)'}
          stroke={stroke}
          strokeWidth={1}
        />
      ))}
      <text x={width - pad} y={12} textAnchor="end" fontSize={11} fill="var(--text-dim)">
        latest {last.toFixed(1)}
      </text>
    </svg>
  );
}

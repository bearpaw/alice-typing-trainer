import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLocalizedPath } from './context';

export const SRC: Record<string, { href: string; label: string }> = {
  mayo: {
    href: 'https://www.mayoclinic.org/diseases-conditions/carpal-tunnel-syndrome/symptoms-causes/syc-20355603',
    label: 'Mayo Clinic',
  },
  osha: { href: 'https://www.osha.gov/etools/computer-workstations', label: 'OSHA' },
  nhs: { href: 'https://www.nhs.uk/conditions/carpal-tunnel-syndrome/', label: 'NHS' },
};

type Token =
  | { kind: 'text'; value: string }
  | { kind: 'strong'; value: string }
  | { kind: 'em'; value: string }
  | { kind: 'src'; label: string; srcKey: string }
  | { kind: 'lesson'; label: string; id: string };

const PATTERN =
  /\*\*([^*]+)\*\*|\*([^*\n]+)\*|\[([^\]]+)\]\((src|lesson):([^)]+)\)/g;

export function parseRich(text: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  PATTERN.lastIndex = 0;
  while ((m = PATTERN.exec(text)) !== null) {
    if (m.index > lastIndex) {
      tokens.push({ kind: 'text', value: text.slice(lastIndex, m.index) });
    }
    if (m[1] !== undefined) {
      tokens.push({ kind: 'strong', value: m[1] });
    } else if (m[2] !== undefined) {
      tokens.push({ kind: 'em', value: m[2] });
    } else if (m[3] !== undefined && m[4] === 'src') {
      tokens.push({ kind: 'src', label: m[3], srcKey: m[5] });
    } else if (m[3] !== undefined && m[4] === 'lesson') {
      tokens.push({ kind: 'lesson', label: m[3], id: m[5] });
    }
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({ kind: 'text', value: text.slice(lastIndex) });
  }
  return tokens;
}

export function Rich({ text }: { text: string }): ReactNode {
  const localizedPath = useLocalizedPath();
  const tokens = parseRich(text);
  return (
    <>
      {tokens.map((tk, i) => {
        switch (tk.kind) {
          case 'text':
            return <Fragment key={i}>{tk.value}</Fragment>;
          case 'strong':
            return <strong key={i}>{tk.value}</strong>;
          case 'em':
            return <em key={i}>{tk.value}</em>;
          case 'src': {
            const entry = SRC[tk.srcKey];
            if (!entry) return <Fragment key={i}>{tk.label}</Fragment>;
            return (
              <a
                key={i}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="src-link"
                aria-label={`Source: ${tk.label}`}
              >
                {tk.label}
              </a>
            );
          }
          case 'lesson':
            return (
              <Link key={i} to={localizedPath(`/lessons/${tk.id}`)}>
                {tk.label}
              </Link>
            );
        }
      })}
    </>
  );
}

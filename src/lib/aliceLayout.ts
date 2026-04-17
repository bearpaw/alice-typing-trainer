export type Finger = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';
export type Hand = 'L' | 'R';

export type Key = {
  char: string;
  shift?: string;
  row: 0 | 1 | 2 | 3 | 4;
  col: number;
  width?: number;
  hand: Hand;
  finger: Finger;
  splitSensitive?: boolean;
  label?: string;
};

export const FINGER_COLOR: Record<Finger, string> = {
  pinky: 'var(--finger-pinky)',
  ring: 'var(--finger-ring)',
  middle: 'var(--finger-middle)',
  index: 'var(--finger-index)',
  thumb: 'var(--finger-thumb)',
};

export const leftHalf: Key[] = [
  { char: '`', shift: '~', row: 0, col: 0, hand: 'L', finger: 'pinky' },
  { char: '1', shift: '!', row: 0, col: 1, hand: 'L', finger: 'pinky' },
  { char: '2', shift: '@', row: 0, col: 2, hand: 'L', finger: 'ring' },
  { char: '3', shift: '#', row: 0, col: 3, hand: 'L', finger: 'middle' },
  { char: '4', shift: '$', row: 0, col: 4, hand: 'L', finger: 'index' },
  { char: '5', shift: '%', row: 0, col: 5, hand: 'L', finger: 'index' },

  { char: 'tab', row: 1, col: 0, width: 1.5, hand: 'L', finger: 'pinky', label: 'Tab' },
  { char: 'q', shift: 'Q', row: 1, col: 1.5, hand: 'L', finger: 'pinky' },
  { char: 'w', shift: 'W', row: 1, col: 2.5, hand: 'L', finger: 'ring' },
  { char: 'e', shift: 'E', row: 1, col: 3.5, hand: 'L', finger: 'middle' },
  { char: 'r', shift: 'R', row: 1, col: 4.5, hand: 'L', finger: 'index' },
  { char: 't', shift: 'T', row: 1, col: 5.5, hand: 'L', finger: 'index', splitSensitive: true },

  { char: 'caps', row: 2, col: 0, width: 1.75, hand: 'L', finger: 'pinky', label: 'Caps' },
  { char: 'a', shift: 'A', row: 2, col: 1.75, hand: 'L', finger: 'pinky' },
  { char: 's', shift: 'S', row: 2, col: 2.75, hand: 'L', finger: 'ring' },
  { char: 'd', shift: 'D', row: 2, col: 3.75, hand: 'L', finger: 'middle' },
  { char: 'f', shift: 'F', row: 2, col: 4.75, hand: 'L', finger: 'index' },
  { char: 'g', shift: 'G', row: 2, col: 5.75, hand: 'L', finger: 'index', splitSensitive: true },

  { char: 'shift', row: 3, col: 0, width: 2.25, hand: 'L', finger: 'pinky', label: 'Shift' },
  { char: 'z', shift: 'Z', row: 3, col: 2.25, hand: 'L', finger: 'pinky' },
  { char: 'x', shift: 'X', row: 3, col: 3.25, hand: 'L', finger: 'ring' },
  { char: 'c', shift: 'C', row: 3, col: 4.25, hand: 'L', finger: 'middle' },
  { char: 'v', shift: 'V', row: 3, col: 5.25, hand: 'L', finger: 'index' },
  { char: 'b', shift: 'B', row: 3, col: 6.25, hand: 'L', finger: 'index', splitSensitive: true },

  { char: 'ctrl', row: 4, col: 0, width: 1.25, hand: 'L', finger: 'pinky', label: 'Ctrl' },
  { char: 'alt', row: 4, col: 1.25, width: 1.25, hand: 'L', finger: 'thumb', label: 'Alt' },
  { char: 'meta', row: 4, col: 2.5, width: 1.25, hand: 'L', finger: 'thumb', label: 'Cmd' },
  { char: ' ', row: 4, col: 3.75, width: 3.5, hand: 'L', finger: 'thumb', label: 'Space' },
];

export const rightHalf: Key[] = [
  { char: '6', shift: '^', row: 0, col: 0, hand: 'R', finger: 'index' },
  { char: '7', shift: '&', row: 0, col: 1, hand: 'R', finger: 'index' },
  { char: '8', shift: '*', row: 0, col: 2, hand: 'R', finger: 'middle' },
  { char: '9', shift: '(', row: 0, col: 3, hand: 'R', finger: 'ring' },
  { char: '0', shift: ')', row: 0, col: 4, hand: 'R', finger: 'pinky' },
  { char: '-', shift: '_', row: 0, col: 5, hand: 'R', finger: 'pinky' },
  { char: '=', shift: '+', row: 0, col: 6, hand: 'R', finger: 'pinky' },
  { char: 'bksp', row: 0, col: 7, width: 1.5, hand: 'R', finger: 'pinky', label: '⌫' },

  { char: 'y', shift: 'Y', row: 1, col: 0, hand: 'R', finger: 'index', splitSensitive: true },
  { char: 'u', shift: 'U', row: 1, col: 1, hand: 'R', finger: 'index' },
  { char: 'i', shift: 'I', row: 1, col: 2, hand: 'R', finger: 'middle' },
  { char: 'o', shift: 'O', row: 1, col: 3, hand: 'R', finger: 'ring' },
  { char: 'p', shift: 'P', row: 1, col: 4, hand: 'R', finger: 'pinky' },
  { char: '[', shift: '{', row: 1, col: 5, hand: 'R', finger: 'pinky' },
  { char: ']', shift: '}', row: 1, col: 6, hand: 'R', finger: 'pinky' },
  { char: '\\', shift: '|', row: 1, col: 7, width: 1.5, hand: 'R', finger: 'pinky' },

  { char: 'h', shift: 'H', row: 2, col: 0, hand: 'R', finger: 'index', splitSensitive: true },
  { char: 'j', shift: 'J', row: 2, col: 1, hand: 'R', finger: 'index' },
  { char: 'k', shift: 'K', row: 2, col: 2, hand: 'R', finger: 'middle' },
  { char: 'l', shift: 'L', row: 2, col: 3, hand: 'R', finger: 'ring' },
  { char: ';', shift: ':', row: 2, col: 4, hand: 'R', finger: 'pinky' },
  { char: '\'', shift: '"', row: 2, col: 5, hand: 'R', finger: 'pinky' },
  { char: 'enter', row: 2, col: 6, width: 2.25, hand: 'R', finger: 'pinky', label: 'Enter' },

  { char: 'n', shift: 'N', row: 3, col: 0, hand: 'R', finger: 'index', splitSensitive: true },
  { char: 'm', shift: 'M', row: 3, col: 1, hand: 'R', finger: 'index' },
  { char: ',', shift: '<', row: 3, col: 2, hand: 'R', finger: 'middle' },
  { char: '.', shift: '>', row: 3, col: 3, hand: 'R', finger: 'ring' },
  { char: '/', shift: '?', row: 3, col: 4, hand: 'R', finger: 'pinky' },
  { char: 'shift', row: 3, col: 5, width: 2.75, hand: 'R', finger: 'pinky', label: 'Shift' },

  { char: ' ', row: 4, col: 0, width: 3, hand: 'R', finger: 'thumb', label: 'Space' },
  { char: 'alt', row: 4, col: 3, width: 1.25, hand: 'R', finger: 'thumb', label: 'Alt' },
  { char: 'ctrl', row: 4, col: 4.25, width: 1.25, hand: 'R', finger: 'pinky', label: 'Ctrl' },
];

const allKeys: Key[] = [...leftHalf, ...rightHalf];

const byChar = new Map<string, Key>();
for (const k of allKeys) {
  byChar.set(k.char.toLowerCase(), k);
  if (k.shift) byChar.set(k.shift, k);
}

export function keyFor(char: string): Key | null {
  if (!char) return null;
  const lower = char.toLowerCase();
  return byChar.get(char) ?? byChar.get(lower) ?? null;
}

export function isShifted(char: string): boolean {
  return /[A-Z~!@#$%^&*()_+{}|:"<>?]/.test(char);
}

export const SPLIT_SENSITIVE_CHARS = ['b', 't', 'g', 'y', 'h', 'n'];

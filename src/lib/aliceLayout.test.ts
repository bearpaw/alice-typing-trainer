import { describe, it, expect } from 'vitest';
import {
  keyFor,
  isShifted,
  leftHalf,
  rightHalf,
  SPLIT_SENSITIVE_CHARS,
} from './aliceLayout';

describe('keyFor', () => {
  it('returns null for empty string', () => {
    expect(keyFor('')).toBeNull();
  });

  it('returns null for unknown characters', () => {
    expect(keyFor('§')).toBeNull();
    expect(keyFor('€')).toBeNull();
  });

  it('finds lowercase letters', () => {
    const a = keyFor('a');
    expect(a).not.toBeNull();
    expect(a?.hand).toBe('L');
    expect(a?.finger).toBe('pinky');
  });

  it('maps uppercase to the same base key as lowercase', () => {
    expect(keyFor('A')?.char).toBe('a');
    expect(keyFor('Z')?.char).toBe('z');
    expect(keyFor('M')?.char).toBe('m');
  });

  it('finds digits and their shifted punctuation', () => {
    expect(keyFor('1')?.char).toBe('1');
    expect(keyFor('!')?.char).toBe('1');
    expect(keyFor('?')?.char).toBe('/');
    expect(keyFor(':')?.char).toBe(';');
  });

  it('finds plain punctuation', () => {
    expect(keyFor(',')?.char).toBe(',');
    expect(keyFor('.')?.char).toBe('.');
    expect(keyFor('/')?.char).toBe('/');
    expect(keyFor(';')?.char).toBe(';');
  });

  it('maps space to a thumb key', () => {
    const space = keyFor(' ');
    expect(space).not.toBeNull();
    expect(space?.finger).toBe('thumb');
  });
});

describe('Alice split-sensitive keys', () => {
  it.each(SPLIT_SENSITIVE_CHARS)('marks "%s" as splitSensitive', (c) => {
    expect(keyFor(c)?.splitSensitive).toBe(true);
  });

  it('T, G, B live on the LEFT hand (Alice-correct)', () => {
    expect(keyFor('t')?.hand).toBe('L');
    expect(keyFor('g')?.hand).toBe('L');
    expect(keyFor('b')?.hand).toBe('L');
  });

  it('Y, H, N live on the RIGHT hand (Alice-correct)', () => {
    expect(keyFor('y')?.hand).toBe('R');
    expect(keyFor('h')?.hand).toBe('R');
    expect(keyFor('n')?.hand).toBe('R');
  });
});

describe('isShifted', () => {
  it('is true for uppercase ASCII letters', () => {
    expect(isShifted('A')).toBe(true);
    expect(isShifted('Z')).toBe(true);
  });

  it('is true for shifted punctuation', () => {
    expect(isShifted('!')).toBe(true);
    expect(isShifted('?')).toBe(true);
    expect(isShifted('@')).toBe(true);
    expect(isShifted(':')).toBe(true);
    expect(isShifted('"')).toBe(true);
  });

  it('is false for lowercase letters and unshifted chars', () => {
    expect(isShifted('a')).toBe(false);
    expect(isShifted('z')).toBe(false);
    expect(isShifted('1')).toBe(false);
    expect(isShifted(' ')).toBe(false);
    expect(isShifted(',')).toBe(false);
    expect(isShifted(';')).toBe(false);
  });
});

describe('keyboard layout coverage', () => {
  const letters = [...'abcdefghijklmnopqrstuvwxyz'];
  it.each(letters)('has a key for %s', (c) => {
    expect(keyFor(c)).not.toBeNull();
  });

  const digits = [...'0123456789'];
  it.each(digits)('has a key for %s', (d) => {
    expect(keyFor(d)).not.toBeNull();
  });

  it('covers every char of every English letter in both cases', () => {
    for (const c of 'abcdefghijklmnopqrstuvwxyz') {
      expect(keyFor(c), c).not.toBeNull();
      expect(keyFor(c.toUpperCase()), c.toUpperCase()).not.toBeNull();
    }
  });

  it('defines space on both halves', () => {
    const spaces = [...leftHalf, ...rightHalf].filter((k) => k.char === ' ');
    expect(spaces.length).toBe(2);
  });

  it('every key has a valid finger', () => {
    const valid = new Set(['pinky', 'ring', 'middle', 'index', 'thumb']);
    for (const k of [...leftHalf, ...rightHalf]) {
      expect(valid.has(k.finger), `${k.char} → ${k.finger}`).toBe(true);
    }
  });
});

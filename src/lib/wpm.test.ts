import { describe, it, expect } from 'vitest';
import { wpm, accuracy } from './wpm';

describe('wpm', () => {
  it('returns 0 when elapsed time is zero or negative', () => {
    expect(wpm(0, 0)).toBe(0);
    expect(wpm(50, 0)).toBe(0);
    expect(wpm(50, -100)).toBe(0);
  });

  it('computes (correctChars / 5) / minutes', () => {
    // 300 correct chars in 60 seconds = 60 WPM
    expect(wpm(300, 60_000)).toBe(60);
    // 25 chars in 30 seconds = 10 WPM
    expect(wpm(25, 30_000)).toBe(10);
    // 100 chars in 15 seconds = 80 WPM
    expect(wpm(100, 15_000)).toBe(80);
  });

  it('returns 0 for zero correct chars', () => {
    expect(wpm(0, 60_000)).toBe(0);
  });
});

describe('accuracy', () => {
  it('returns 100 when no keystrokes yet', () => {
    expect(accuracy(0, 0)).toBe(100);
  });

  it('returns 100 when all correct', () => {
    expect(accuracy(50, 50)).toBe(100);
  });

  it('computes percentage', () => {
    expect(accuracy(45, 50)).toBe(90);
    expect(accuracy(1, 4)).toBe(25);
    expect(accuracy(0, 10)).toBe(0);
  });
});

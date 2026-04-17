import { describe, it, expect } from 'vitest';
import { LESSONS, TEST_QUOTES, pickRandomQuote } from './lessons';
import { keyFor } from './aliceLayout';
import en from './i18n/en';
import zhCN from './i18n/zh-CN';
import zhTW from './i18n/zh-TW';
import ja from './i18n/ja';

const HOME_LEFT = [...'asdf'];
const HOME_RIGHT = [...'jkl;'];
const HOME = [...'asdfghjkl;'];
const TOP = [...'qwertyuiop'];
const BOTTOM = [...'zxcvbnm,./'];
const ALPHA = [...'abcdefghijklmnopqrstuvwxyz'];
const UPPER = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const SCOPE: Record<string, Set<string>> = {
  'home-left': new Set([...HOME_LEFT, ' ']),
  'home-right': new Set([...HOME_RIGHT, ' ']),
  'home-full': new Set([...HOME, ' ']),
  'top-row': new Set([...HOME, ...TOP, ' ']),
  'bottom-alice': new Set([...HOME, ...TOP, ...BOTTOM, ' ']),
  'split-sensitive': new Set([...HOME, ...TOP, ...BOTTOM, ' ']),
  bigrams: new Set([...ALPHA, ' ']),
  sentences: new Set([...ALPHA, ...UPPER, ...',.', ' ']),
};

describe('LESSONS', () => {
  it('exposes the eight expected lessons in order', () => {
    expect(LESSONS.map((l) => l.id)).toEqual([
      'home-left',
      'home-right',
      'home-full',
      'top-row',
      'bottom-alice',
      'split-sensitive',
      'bigrams',
      'sentences',
    ]);
  });

  it('lesson ids are unique', () => {
    const ids = LESSONS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe.each(LESSONS)('$id', (lesson) => {
    it('has a non-empty drill', () => {
      expect(lesson.drill.length).toBeGreaterThan(0);
    });

    it.each([
      ['en', en],
      ['zh-CN', zhCN],
      ['zh-TW', zhTW],
      ['ja', ja],
    ])('has non-empty title and desc in %s', (_name, messages) => {
      const entry = messages.lessons.items[lesson.id];
      expect(entry, `missing lesson meta for ${lesson.id}`).toBeDefined();
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.desc.length).toBeGreaterThan(0);
    });

    it('drill uses only characters in its declared scope', () => {
      const scope = SCOPE[lesson.id];
      const outOfScope = [...lesson.drill].filter((c) => !scope.has(c));
      expect(outOfScope, `unexpected chars in ${lesson.id}`).toEqual([]);
    });

    it('every drill character is typeable on the Alice layout', () => {
      for (const c of lesson.drill) {
        if (c === ' ') continue;
        expect(keyFor(c), `no key for "${c}" in ${lesson.id}`).not.toBeNull();
      }
    });
  });
});

describe('TEST_QUOTES', () => {
  it('is non-empty', () => {
    expect(TEST_QUOTES.length).toBeGreaterThan(0);
  });

  it('every quote char is ASCII printable', () => {
    for (const q of TEST_QUOTES) {
      for (const c of q) {
        const code = c.charCodeAt(0);
        expect(code, `char "${c}" in "${q}"`).toBeGreaterThanOrEqual(0x20);
        expect(code, `char "${c}" in "${q}"`).toBeLessThanOrEqual(0x7e);
      }
    }
  });

  it('every quote char maps to a key on the layout', () => {
    for (const q of TEST_QUOTES) {
      for (const c of q) {
        expect(keyFor(c), `unmappable char "${c}" in "${q}"`).not.toBeNull();
      }
    }
  });

  it('pickRandomQuote returns a quote from the pool', () => {
    for (let i = 0; i < 50; i++) {
      expect(TEST_QUOTES).toContain(pickRandomQuote());
    }
  });
});

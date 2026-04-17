import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  appendHistory,
  clearHistory,
  loadHistory,
  loadLessonProgress,
  saveLessonResult,
} from './storage';

class MemoryStorage {
  private store = new Map<string, string>();
  get length() {
    return this.store.size;
  }
  clear() {
    this.store.clear();
  }
  getItem(key: string) {
    return this.store.has(key) ? this.store.get(key)! : null;
  }
  key(i: number) {
    return [...this.store.keys()][i] ?? null;
  }
  removeItem(key: string) {
    this.store.delete(key);
  }
  setItem(key: string, value: string) {
    this.store.set(key, String(value));
  }
}

beforeEach(() => {
  vi.stubGlobal('localStorage', new MemoryStorage());
});

describe('test history', () => {
  it('returns empty array when nothing stored', () => {
    expect(loadHistory()).toEqual([]);
  });

  it('appends and persists a result', () => {
    const r = { timestamp: 1, wpm: 60, accuracy: 95, durationSec: 60 };
    appendHistory(r);
    expect(loadHistory()).toEqual([r]);
  });

  it('preserves insertion order across multiple appends', () => {
    appendHistory({ timestamp: 1, wpm: 40, accuracy: 90, durationSec: 60 });
    appendHistory({ timestamp: 2, wpm: 50, accuracy: 92, durationSec: 60 });
    appendHistory({ timestamp: 3, wpm: 55, accuracy: 94, durationSec: 60 });
    expect(loadHistory().map((r) => r.timestamp)).toEqual([1, 2, 3]);
  });

  it('caps history at 100 entries (keeping the newest)', () => {
    for (let i = 0; i < 120; i++) {
      appendHistory({ timestamp: i, wpm: i, accuracy: 100, durationSec: 60 });
    }
    const hist = loadHistory();
    expect(hist.length).toBe(100);
    expect(hist[0].timestamp).toBe(20);
    expect(hist[hist.length - 1].timestamp).toBe(119);
  });

  it('clearHistory wipes the store', () => {
    appendHistory({ timestamp: 1, wpm: 60, accuracy: 95, durationSec: 60 });
    clearHistory();
    expect(loadHistory()).toEqual([]);
  });

  it('recovers gracefully from corrupt JSON', () => {
    localStorage.setItem('att.testHistory.v1', 'not json {{');
    expect(loadHistory()).toEqual([]);
  });

  it('recovers gracefully when stored value is not an array', () => {
    localStorage.setItem('att.testHistory.v1', '{"nope": true}');
    expect(loadHistory()).toEqual([]);
  });
});

describe('lesson progress', () => {
  it('returns empty object when nothing stored', () => {
    expect(loadLessonProgress()).toEqual({});
  });

  it('records best WPM and best accuracy independently', () => {
    saveLessonResult('home-left', 40, 95);
    saveLessonResult('home-left', 35, 98);
    const p = loadLessonProgress();
    expect(p['home-left']).toEqual({ bestWpm: 40, bestAccuracy: 98 });
  });

  it('keeps higher WPM even if accuracy drops', () => {
    saveLessonResult('home-left', 60, 85);
    saveLessonResult('home-left', 50, 95);
    expect(loadLessonProgress()['home-left']).toEqual({ bestWpm: 60, bestAccuracy: 95 });
  });

  it('tracks each lesson id independently', () => {
    saveLessonResult('home-left', 40, 95);
    saveLessonResult('home-right', 30, 88);
    const p = loadLessonProgress();
    expect(p['home-left'].bestWpm).toBe(40);
    expect(p['home-right'].bestWpm).toBe(30);
  });

  it('recovers gracefully from corrupt JSON', () => {
    localStorage.setItem('att.lessonProgress.v1', 'garbage');
    expect(loadLessonProgress()).toEqual({});
  });
});

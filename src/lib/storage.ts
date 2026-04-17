export type TestResult = {
  timestamp: number;
  wpm: number;
  accuracy: number;
  durationSec: number;
};

const HISTORY_KEY = 'att.testHistory.v1';
const LESSON_PROGRESS_KEY = 'att.lessonProgress.v1';

export function loadHistory(): TestResult[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendHistory(result: TestResult): TestResult[] {
  const list = [...loadHistory(), result].slice(-100);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
  return list;
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}

export function loadLessonProgress(): Record<string, { bestWpm: number; bestAccuracy: number }> {
  try {
    const raw = localStorage.getItem(LESSON_PROGRESS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) ?? {};
  } catch {
    return {};
  }
}

export function saveLessonResult(id: string, wpm: number, accuracy: number): void {
  const current = loadLessonProgress();
  const prev = current[id] ?? { bestWpm: 0, bestAccuracy: 0 };
  current[id] = {
    bestWpm: Math.max(prev.bestWpm, wpm),
    bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
  };
  localStorage.setItem(LESSON_PROGRESS_KEY, JSON.stringify(current));
}

export function wpm(correctChars: number, elapsedMs: number): number {
  if (elapsedMs <= 0) return 0;
  return (correctChars / 5) / (elapsedMs / 60000);
}

export function accuracy(correct: number, total: number): number {
  if (total === 0) return 100;
  return (correct / total) * 100;
}

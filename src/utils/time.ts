/**
 * Format time from microseconds to MM:SS
 */
export function formatTime(microseconds: number): string {
  const seconds = Math.floor(microseconds / 1000000);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate progress percentage
 */
export function calculateProgress(position: number, length: number): number {
  if (!length) return 0;
  return Math.min((position / length) * 100, 100);
}

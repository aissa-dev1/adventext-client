export function calcGameCompletion(
  currentScene: number,
  totalScenes: number
): string {
  if (currentScene > totalScenes || currentScene < 1) {
    return "Invalid scene number!";
  }

  const percentage = (currentScene / totalScenes) * 100;
  return `${percentage.toFixed(2)}% completed`;
}

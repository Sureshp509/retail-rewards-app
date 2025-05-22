export function calculatePoints(amount) {
  let points = 0;

  if (amount > 100) {
    points += 2 * Math.floor(amount - 100); // 2 points for every dollar over 100
    points += 50; // 1 point for every dollar between 50 and 100 (fixed 50 points)
  } else if (amount > 50) {
    points += Math.floor(amount - 50); // 1 point for every dollar over 50
  }

  return points;
}

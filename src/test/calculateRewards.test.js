import { calculatePoints } from '../utils/calculateRewards';

describe('calculatePoints', () => {
  test('calculates correct points for amount less than 50', () => {
    expect(calculatePoints(40)).toBe(0);
  });

  test('calculates correct points for amount between 50 and 100', () => {
    expect(calculatePoints(75)).toBe(25);
  });

  test('calculates correct points for amount over 100', () => {
    expect(calculatePoints(120)).toBe(90);
  });

  test('returns 0 for negative or zero amount', () => {
    expect(calculatePoints(0)).toBe(0);
    expect(calculatePoints(-10)).toBe(0);
  });
});

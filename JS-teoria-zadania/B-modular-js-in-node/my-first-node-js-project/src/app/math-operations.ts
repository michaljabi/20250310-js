export class MathError extends Error {}

export function divideBy(a: number, b: number = 1): number {
  if (b === 0) {
    //  throw "!!!" tego nie chcemy praktykować
    throw new MathError('Cannot divide by 0')
  }
  return a / b
}

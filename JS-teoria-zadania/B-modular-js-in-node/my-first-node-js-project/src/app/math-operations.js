export class MathError extends Error {}


export function divideBy(a = 0, b = 1) {
    if(b === 0) {
        //  throw "!!!" tego nie chcemy praktykować
        throw new MathError('Cannot divide by 0')
    }
    return a / b;
}
import { divideBy, MathError } from "./app/math-operations.js";
import { makeBanner } from "./make-banner.js";

// import NN, { TEST as myTest, hello } from "./make-banner.js"; // import default i alias importu named.
// import * as collection from "./make-banner.js"; // namespace import

console.log('Witaj w BannerShow');

makeBanner('To jest mój testowy banner')
// console.log(collection.default)
// console.log(myTest)

console.log('------')

try {
    // s
    console.log('divide 100 / 10 =', divideBy(100, 10))
    console.log('divide 100 / 2 =', divideBy(100, 2))
    console.log('divide 56 / 0 =', divideBy(56, 0))
} catch (e) {
    if(e instanceof ReferenceError) {
        console.warn('ReferenceError error happend', e.message)
    } else if(e instanceof MathError) {
        console.log('Math error:', e.message)
    } else if(e instanceof Error) {
        console.log(e)
    } else {
        console.log('Unhandled, unknown... error', e)
    }
} finally {
    let x = 10
    console.log('I will always run...', x)
}

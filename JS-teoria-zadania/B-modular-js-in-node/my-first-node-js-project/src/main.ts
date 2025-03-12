import { divideBy, MathError } from './app/math-operations.js'
import { makeBanner } from './make-banner.js'

import _ from 'lodash'

// import NN, { TEST as myTest, hello } from "./make-banner.js"; // import default i alias importu named.
// import * as collection from "./make-banner.js"; // namespace import

console.log('Witaj w BannerShow', _.last(['a', 'b', 'c']))

makeBanner('To jest mój test!')
// console.log(collection.default)
// console.log(myTest)

console.log('---- !!! --')

try {
  // s
  console.log('divide 10 / 10 =', divideBy(10, 10))
  console.log('divide 100 / 2 =', divideBy(100, 2))
  console.log('divide 56 / 0 =', divideBy(56, 0))
} catch (e) {
  if (e instanceof ReferenceError) {
    console.warn('ReferenceError error happend', e.message)
  } else if (e instanceof MathError) {
    console.log('Math error:', e.message)
  } else if (e instanceof Error) {
    console.log(e)
  } else {
    console.log('Unhandled, unknown... error', e)
  }
} finally {
  // przykład es-lint errora:
  const makeBanner = 10
  console.log('I will always run...', makeBanner)
}

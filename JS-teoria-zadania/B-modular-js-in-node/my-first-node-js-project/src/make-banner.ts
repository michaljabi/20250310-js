// ESM -> Ecma Script Modules. innymi słowy składnia import/export dla plików (Modułów!) powstaje w 2015r.

// export const TEST = 'Hello test';

// export function hello() {

// }

// export default 567;
// export default 'HELLO';

export function makeBanner(text: string) {
  const border = '*'.repeat(text.length + 4)
  console.log(border)
  console.log(`* ${text.toUpperCase()} *`)
  console.log(border)
}

/**
 * Ponieważ JavaScript nie posiada tzw. twardego typowania
 * pozwala nam robić ze zmiennymi "co tylko nam przyjdzie do głowy"
 *
 * Złym pomysłem (przyzwyczajeniem) będzie tutaj:
 *  "dynamiczna zmiana typu zmiennej"
 *
 *  Słowem kluczowym "typeof" możesz łatwo zobaczyć jakiego zmienna jest typu prostego
 */

// najpierw string:
let helloWorld = 'Hello World'
console.log(helloWorld, 'is:', typeof helloWorld)

// potem number:
helloWorld = 12333
console.log(helloWorld, 'is:', typeof helloWorld)

// potem boolean:
helloWorld = true
console.log(helloWorld, 'is:', typeof helloWorld)

// potem undefined:
helloWorld = undefined
console.log(helloWorld, 'is:', typeof helloWorld)

// #1 Zadanie:
// Zrefaktoryzuj - zmień powyższe zapisy na poprawny kod
// Nie zmieniając tzw. "logiki działania" (to znaczy wszystkie console.log'i zostają i mają pokazywać się tak jak do tej pory)

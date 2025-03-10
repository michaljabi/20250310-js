let x = 2;
const y = 3;

// #1 Zadanie:
// Pokaż wynik dodawania x i y (oczekiwane: 5)
console.log(x + y);

const result = x + y;
console.log(result);


// function x() {}

// {
  
//   let x = 'hello';
  
//   console.log(x);
// }

// console.log(x);


// #2 Zadanie:
// Pokaż wynik potęgowania x do 3 (lub x do y) (oczekiwane: 8)
// 1: hardcode (złe rozwiązanie)
console.log(x * x * x)
// 2: opcja 1
console.log(Math.pow(x, y))
// 3: opcja 2
console.log( x ** y)

//------------------------------------------------------------
// const hello = 'Hello\'s\nline "ss"  ';
//const almostWorld = "Almost \"World\"";
const hello = "Hello";
const almostWorld = "Almost World";

// #3 Zadanie:
/*
		Pokaż wynik dodawania hello + almostWorld
    Tak aby na konsoli pokazał się napis "Hello World"
    użyj odpowiedniej metody wbudowanej na stałej almostWorld (!)
*/

// 1: opcja 1
console.log(hello + almostWorld.slice(6))
// 2: opcja 2
console.log(hello + almostWorld.substring(6))


// 3: opcja 3
console.log(almostWorld.split(' '))
console.log(hello, almostWorld.split(' ')[1])


console.log(almostWorld.slice(2))
console.log(almostWorld.slice(-2))

console.log(almostWorld.substring(2))
console.log(almostWorld.substring(-2))
//------------------------------------------------------------
let isAnAdmin = true;
console.log(isAnAdmin);
isAnAdmin = false;
console.log(isAnAdmin);

// #4 Zadanie
// Odkomentuj i napraw błąd w linii z kodem "isAnAdmin = false"
// Powinieneś zobaczyć następujący wynik na konsoli:
// true
// false

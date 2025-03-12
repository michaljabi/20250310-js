// #1 Zadanie:
// Zadeklaruj nową tablicę z numerami 1 do 8
// Wyrzuć z niej pierwszą i ostatnią wartość
const ref = {};

// uwaga prowadzący w celach pokazowych zmiksował tutaj typy danych !!!
const numbers = [1,2,3, NaN,4,5,6,7, ref,8];

// delete numbers[0]; // tego nie polecam bo index 0 będzie po prostu undefined !
numbers.shift();
numbers.pop();

// Wymiana elementu
numbers[3] = 50;
// Wymiana elementu (usunięcie + dodanie jeśli potrzeba)
numbers.splice(3, 1, 60) // to jest metoda która mutuje (manipuluje) elementami w array, usuwa i dodaje w konkretne miejsce.

console.log(numbers);
console.log(numbers[0]);

// #2 Zadanie:
// Pokaż na konsoli "jedno pod drugim" wynik mnożenia pól tej tablicy przez 3
for(const num of numbers) {
    // !  - NOT
    // && - AND
    // || - OR
    if(num === 100 || (!Number.isNaN(num) && typeof num === 'number')) {
        console.log(num * 3)
    }
}
// rozwiązanie 2: funkcyjne
numbers
    .filter(a => Boolean(a) && typeof a === 'number')
    .map(n => n * 3)
    .forEach(e => {
        console.log(e);
    })

// #3 Zadanie:
// Sprawdź w dokumentacji metodę "indexOf" dla tablic. Jak ją użyć? Pokaż przykład zastosowania
numbers.indexOf(60) //=
numbers.indexOf(601) //=
numbers.indexOf(ref) //=

// operacje NIEMUTUJĄCE na tablicach: map, filter, reduce 
console.log(numbers.filter(a => Boolean(a) && typeof a === 'number'))
console.log(numbers);

// #4 Zadanie:
// Pokaż na konsoli 1-wszy i ostatni element tablicy (jeden pod drugim)
console.log(numbers[0])
console.log(numbers[numbers.length-1])
// 2:
console.log(numbers.at(0))
console.log(numbers.at(-1))
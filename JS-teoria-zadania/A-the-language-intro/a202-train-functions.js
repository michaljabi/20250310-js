// #1 Zadanie:
// Napisz funkcję, która wyświetli na ekranie napis: 'Witaj Nieznajomy'
// wywołana bez argumentu
// wywołana z argumentem 'Michał' wyświetli napis: 'Witaj Michał'
// Zastanów się nad poprawnymi nazwami funkcji i jej parametru


// 1. Make it work // działający prototyp
// 2. Make it right // pochylenie się nad kodem i tzw. refactoring (dobre praktyki i "czyste" rozwiązanie)
// 3. Make it fast // próba optymalizacji rozwiązania

function sayHelloTo(name = 'Nieznajomy') {
    console.log('Witaj', name);
} 

sayHelloTo()
sayHelloTo('Michał')
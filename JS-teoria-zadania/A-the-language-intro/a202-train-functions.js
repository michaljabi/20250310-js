// #1 Zadanie:
// Napisz funkcję, która wyświetli na ekranie napis: 'Witaj Nieznajomy'
// wywołana bez argumentu
// wywołana z argumentem 'Michał' wyświetli napis: 'Witaj Michał'
// Zastanów się nad poprawnymi nazwami funkcji i jej parametru


// 1. Make it work
// 2. Make it right
// 3. Make it fast

function zz(name = 'Nieznajomy') {
    return 'Witaj ' + name;
} 

console.log(zz())
console.log(zz('Michał'))
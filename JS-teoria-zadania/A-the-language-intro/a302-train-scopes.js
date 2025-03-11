
const helloWorld = "hello World!";


// #1 Zadanie:
// Przygotuj funkcję a następnie wywołaj ją
// Niech odnosi się ona do zewnętrznego zakresu i korzysta z helloWorld, pokazując na ekranie
// pierwszy i ostatni znak stringa = 'h!'
// pomocna dłoń?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function showH() {
    
    // console.log(helloWorld.charAt(0) + helloWorld.at(-1))
    console.log(helloWorld.charAt(0) + helloWorld.charAt(helloWorld.length-1))

    const x = 10;
    function showCalculation() {
        console.log(x + 400);
    }
    showCalculation();
}

showH();

// #2 Zadanie:
// Dopisz w środku funkcji zmienną lokalną x = 10

// #3 Zadanie:
// Dopisz w środku tej funkcji inną, która skorzysta i pokaże na ekranie wartość x + 400 (410)

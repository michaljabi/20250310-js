/**
 *  Funkcje mogą być deklarowane z tzw. parametrami.
 *  Są to zapisy odnoszące się do argumentów (danych) przekazanych do funkcji.
 *
 *  Można ich zdefiniować teoretycznie "nieskończenie wiele"
 *  stosując odpowiedni zapis z operatorem rest "..."
 *
 *  Jednak w praktyce nie chcemy żeby tych parametrów było więcej jak 5-7.
 *  Dla czytelności naszego kodu i wygody jego używania.
 *
 *
 *  W momencie deklarowania litery a i b to "parametry"
 *
 *  natomiast przesyłane dane "10" i "20" nazywamy argumentami
 */

// Deklaracja:
function sumThreeNumbers(a = 0, b = 0, c = 0) {
	//console.log(a);
	//console.log(b);
	// if(a === 100) {
	// 	return a * b;
	// }

	// console.log(a);
	//return [a + b, a - b];
	return a + b + c;
}

// console.log(sumTwoNumbers(2, 3))

//console.log(sumTwoNumbers(100, 3))

// console.log(sumTwoNumbers())
// console.log(sumTwoNumbers(1))
// console.log(sumTwoNumbers(1, 2))
// console.log(sumTwoNumbers(1, 2, 3))
// console.log(sumTwoNumbers(1, 2, 3, 8))



// Wywołanie:
const result = sumThreeNumbers(10, 20)


// #1 Zadanie:
// Pokaż wynik dodawania 10 + 20 na ekranie
console.log(result);
console.log(sumThreeNumbers(10, 20));

// #2 Zadanie:
// Policz ile to 30 + 560
console.log(sumThreeNumbers(30, 560));

// #3 Zadanie:
// co jeśli byśmy mieli policzyć 450 + 200 + 100 ?
console.log(sumThreeNumbers(sumThreeNumbers(450, 200), 100));


const partialSum = sumThreeNumbers(450, 200);
console.log(sumThreeNumbers(partialSum, 100));


/* ---------------------- */
// Funkcje po 2015 roku mogą posiadać parametry domyślne:

function greetings(name = 'Admin', lastName) {
	console.log('Hello', name, lastName)
}

// ZAMIAST TAK:
// function greetings(name = 'Admin', lastName) {

// PISZ TAK:
// function greetings(lastName, name = 'Admin') {

// tzn. umieszczaj domyślne parametry na końcu.



// #4 Zadanie:
// spróbuj wywołać greetings z argumentami i bez argumentu, co się stanie ?
greetings(undefined, 'Kowalski')
// greetings('Michał')

// #5 Zadanie:
// Po wykonaniu zadania #4 usuń domyślną wartość user - co się stanie ?


// Pytanie: czy w JS są tzw. named arguments
// a'la: greetings(lastName: '', user: )  ???

// TODO 
// Odpowieź: NIE, ale można je "zasymulować" używając obiektów:
// Pokaże w przyszłośći
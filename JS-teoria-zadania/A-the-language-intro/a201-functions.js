/**
 *  Funkcje - to jedne z podstawowych elementów bez których nie można mówić
 *  o zbudowaniu aplikacji.
 *
 *  Po 1 pozwalają zamknąć wykonywany kod w postaci procedur.
 *  Mówiąc prościej: unikami powtórzeń, ponieważ coś co napisaliśmy możemy wywołać kilka razy
 *  Dzięki użyciu funkcji
 *
 *  Po 2 są w stanie przeliczać dane w zdefiniowany przez nas sposób. Posiadając dane wejściowe
 *  Input - generują dane wyjściowe - Output.
 *
 */

// Deklaracja:
function sayHello() {
	console.log('Witaj!')
}

// Wywołanie:
sayHello()


// #1 Zadanie:
// Jak szybko powtórzyć te zapisy 4 razy na ekranie:
// chcemy widzieć 4 pudełka jedno pod drugim

// sposób 1:
function printTheBox(text = 'in the box') {
	
	console.log(' ', '_'.repeat(text.length+1))
	console.log('| ', text,  '|')
	console.log(' ', '-'.repeat(text.length+1))
}

printTheBox('a')
printTheBox()
printTheBox('hello')
printTheBox(' coś jeszcze innego ')

console.log(Math instanceof Object)

console.log(printTheBox instanceof Function);
console.log(printTheBox instanceof Object);



// sposób 2:
for(let x = 0; x < 4; x++) {
	console.log('  ____________')
	console.log('|  in the box  |')
	console.log('  ------------')
}


// sposób 3:
console.log('---------------------------------------------------------------------------------------')


console.log("  ____________\n|in the box")
console.log('  ____________\n|in the box')
console.log(`  ____________
| in the box |
  ----------`)

console.log('---- END')
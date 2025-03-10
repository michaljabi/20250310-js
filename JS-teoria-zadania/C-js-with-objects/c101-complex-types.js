/**
 * W odróżnieniu od innych wysokopoziomowych języków,
 * pomimo swojej obiektowości, JS nie potrzebuje class
 *
 * Tutaj w momencie przypisania do zmiennej lub po prostu wpisania
 * w kod tzw. "Literału obiektowego" {}
 *
 * Tworzone jest miejsce w pamięci i nowa instancja obiektu
 *
 * Obiekt może być dynamicznie rozszerzany o nowe pola.
 * */

// Inny przykład obiektu JS:
// Po deklaracji i przypisaniu, jest gotowy do użytku!
const cat = {
	whiskers: 'long',
	eyes: 2,
	voice() {
		return 'Mrauuu';
	},
	// voice() {
	// 	return 'Mrauuu2';
	// },
	alwaysLandsOn4Feet: true
};

// #1 Zadanie:
// Pokaż na konsoli wynik działania metody voice
console.log(cat.voice());

cat.voice(); //=



// Kolejne przykłady:

// Na początku user posiada tylko pole "name"
const myUser = {
	name: 'Janina',
	// lastName: '' // od razu określam, że będzie takie pole i to typu string.
};

// Potem dynamicznie dodawane jest pole "lastName" z wartością:
myUser.lastName = 'Kowalska'

// przypomnienie:
// Istnieje zapis, który pozwala odnosić się do obiektu tak jak do kolekcji
// W tym układzie możemy "dynamicznie" dostać się do pola w obiekcie
// np.
console.log(myUser['name'])

// #2 Zadanie:
// Przypisz nowy obiekt do stałej - sprawdź i udowodnij że:
	// a) Nie można mieć kilka tak samo nazwanych pól w obiekcie
	// b) Jeśli wystąpi taka sytuacja to "wartość ostatniego pola wygrywa"

const myExample = {
	sum: 200,
	sum: 4000,
	sum: 2
	// TODO: pokaz gdzie to można wykorzystać na swoją korzyść. (future)
}

console.log(myExample.sum);


// Poza dynamicznym zapisem, można "dostać się" do wszystkich pól obiektu - dzięki pętli for...in
for(const key in myUser) {
	console.log(key);
}

// przejście po wartościach:
for(const key in myUser) {
	console.log(myUser[key]);
}

// coś co zastępuje for in
console.log(Object.values(myUser))
console.log(Object.keys(myUser))
console.log(Object.entries(myUser))

for(const key of Object.keys(myUser)) {
	console.log(key);
}

for(const num of [1, 2, 3]) {
	console.log(num);
}

for(const num of 'po prostu string') {
	console.log(num);
}

for(const num of new Set([2, 3, 4])) {
	console.log(num);
}


// Zauważ, że obiekty można zagnieżdżać:
const tree = {
	branch: {
		leaf: 'green',
		isRoot: false
	}
}

console.log(tree.branch.leaf)

// #3 Zadanie:
// Pokaż na konsoli wartość isRoot w obiekcie tree:

console.log(tree.branch.isRoot)

console.log(tree['branch']['isRoot'])

/**
 * W odróżnieniu od typów prostych (primitives).
 *
 * Obiekty nie są przekazywane przez wartości, a przez referencje.
 * Innymi słowy - tworząc jeden obiekt i przypisując go do zmiennej / stałej.
 * Jeśli zapiszemy kolejną zmienną / stałą i przyrównany do poprzedniej,
 * nie utworzymy niezależnej kopii obiektu - a jedynie 2 prowadzące w to samo miejsce w pamięci - odniesienia.
 * */

const house = {
	name: 'MyHome'
}
console.log(house);

const otherHouse = house;
console.log(otherHouse);

// jednakże to tak naprawdę ten sam obiekt:
console.log(house === otherHouse);
// a 2 wskazujące na to samo miejsce w pamięci odniesienia "referencje"
// dowód:
otherHouse.name = 'CHANGED NAME of my home 🏢'

console.log(house);

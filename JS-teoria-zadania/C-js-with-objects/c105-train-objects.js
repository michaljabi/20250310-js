
const fruits = ['cherry', 'apple', 'banana'];
const name = 'Fruit shop'

function greetings() {
	return 'welcome!'
}

/* #1 Zadanie:
	 Utwórz obiekt shop
	 który będzie posiadał pola: fruits name greetings
	 mają one mieć te same wartości co rzeczy zadeklarowane powyżej
*/

const shop = {
	fruits: fruits, // tak nie trzeba bo pola mojego obiektu mają te same nazwy co identifier wyżej
	name,
	greetings
}

console.log(shop)

// #2 Zadanie:
// pokaż na konsoli napis "banana welcome!" używając danych z obiektu
console.log(shop.fruits[2], shop.greetings())

// zadanie dodatkowe, wyciągamy banana 
// za pomocą array destucturing
const [,,banana = 'no fruit'] = shop.fruits;

console.log(banana)

// #3 Zadanie:
// utwórz 2 obiekt concurrentShop który będzie klonem poprzedniego (zadeklaruj z tymi samymi wartościami)
// dodatkowo będzie miał również metodę banner - która zwróci "here prices are the lowest!"
const concurrentShop = {
	fruits,
	name,
	greetings,
	banner() {
		return "here prices are the lowest!"
	}
}

// #4 Zadnie:
// Pokaż na konsoli wszystkie nazwy pól obiektu shop
// 1:
for(const key in shop) {
	console.log(key)
}
// 2:
console.log(Object.keys(shop))
// console.log(Object.values(shop))
console.log(Object.keys(concurrentShop))

export {};
/* #1 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości
*/




const shoppingCartItem = {
	name: 'Komputer',
	price: 2000,
	tax: 0.23, 
	get grossPrice() {
		return Number((this.price + this.price * this.tax).toFixed(2));
	}
}

console.log(shoppingCartItem)
console.log(shoppingCartItem.grossPrice)

/* #2 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem2 z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości

Pokaż w console.log sumy cen(price) i podatków(tax) obydwu produktów jako wartość koszyka
*/

const shoppingCartItem2 = {
	name: 'iPhone',
	price: 3200,
	tax: 0.23
}

// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje
console.log({} === {})



function shoppingCartItemFactory(name = '', price = 0, tax = 0.23) {

	return {
		name: name,
		price: price,
		tax: tax, 
		get grossPrice() {
			return Number((this.price + this.price * this.tax).toFixed(2));
		}
	}
}

const item = shoppingCartItemFactory('Komputer', 2000)
const item2 = shoppingCartItemFactory('iPhone', 3200)

const totalPrice = item.grossPrice + item2.grossPrice;

console.log(item)
console.log(item2)
console.log(totalPrice)


// 
export const myObject = {
	color: '',
	name: '',
}
/* 
 * Dobra wiadomość:
 * 
 * - rzeczy które znasz z OOP w innych językach programowania 
 *   działają również w JavaScript
 * - co prawda ... nie wszystkie - ale dużo jest w API do JS
 * 
 * 
 */


/*

*/

class BaseItem {

    #thisIsPrivate = '';

    constructor(name = '') {
        this.name = name;
        this.#thisIsPrivate = '??'
    }
}

class ShoppingCartItem extends BaseItem {
    // name = '';
    // price = 0;
    // tax;

    constructor(name = '', price = 0, tax = 0.23) {
        super(name)
        this.price = price;
        this.tax = tax;
    }

    get grossPrice() {
        return Number((this.price + this.price * this.tax).toFixed(2));
    }

    set grossPrice(value = 0) {
        //....
    }
}


const shoppingCartItem = new ShoppingCartItem('Komputer', 2000);
const shoppingCartItem2 = new ShoppingCartItem('iPhone', 3200);

console.log(shoppingCartItem)
console.log(shoppingCartItem2)

shoppingCartItem.price = 5000.3

console.log(shoppingCartItem.grossPrice);
console.log(shoppingCartItem2.grossPrice);
// console.log(shoppingCartItem.grossPrice);

console.log(shoppingCartItem === shoppingCartItem2); // dowód na to że obiekty są przekazywane przez referencje

const totalPrice = (shoppingCartItem.grossPrice + shoppingCartItem2.grossPrice).toFixed(2);
console.log(totalPrice);
// console.log({} === {})
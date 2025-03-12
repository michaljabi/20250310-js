// w JS jest możliwe tzw. "Object destructuring"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring


// Mam obiekt:
const house = {
    name: 'Mój domek',
    type: 'flat',
    rooms: 5,
    floorFurnitures: {
        first: ['tv', 'bookshelf'],
        second: ['']
    }
}

// chcę wyciągnac bookshelf:
const [,b] = house.floorFurnitures.first;
console.log(b);

// Mogę dostać się klasycznie do jego pól:
const houseType = house.type;
console.log(houseType);

const houseNoOfRooms = house.rooms;
console.log(houseNoOfRooms);


// Jeśli jednak moim zadaniem jest powyciąganie elementów z obiektu w celu utworzenia innych zmiennych i stałych
// to mogę go zdestrukturyzować:
let { type, name, rooms:noOfRooms, nonExisting = 332 } = house;

console.log(type)
console.log(name)
console.log(noOfRooms)

console.log(nonExisting)

type = ''
console.log(type);


// Syntax ten mogę wykorzystać do wyprowadzenia
// symulacji "named arguments" w JS:

function showMeYourData(name = 'Anonymous', lastName = '', age = 18) {
    console.log('You are', name, lastName, 'having', age, 'years old')
}


// object
function showMeYourData2(data = {}) {
    const {name = 'Anonymous', lastName = '', age = 18} = data;
    console.log('You are', name, lastName, 'having', age, 'years old')
}

showMeYourData2({ lastName: 'Nowak', age: 45, name: 'Adam' })


// object destructuring natychmiastowo!
function showMeYourData3({name = 'Anonymous', lastName = '', age = 18} = {}) {
    console.log('You are', name, lastName, 'having', age, 'years old')
}

showMeYourData3({name: 'Michał'})

export {};

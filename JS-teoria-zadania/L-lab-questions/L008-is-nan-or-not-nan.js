isNaN(0) //=

isNaN(NaN) //=

// Gdzie jest pułapka?
isNaN(undefined) //=
isNaN() //=


Number(undefined) //=



// Dopiero w 2015 wchodzi Number.isNaN i rozwiązuje problem:

Number.isNaN(NaN) //=
Number.isNaN(0) //=
Number.isNaN(null) //=
Number.isNaN() //=
Number.isNaN(undefined) //=

// problem powstał od  początku bo NaN nie jest stałą....
console.log(NaN == NaN)
console.log(NaN === NaN)

// NaN jest niestety typu number:
console.log(typeof 0)
console.log(typeof 200)
console.log(typeof NaN);


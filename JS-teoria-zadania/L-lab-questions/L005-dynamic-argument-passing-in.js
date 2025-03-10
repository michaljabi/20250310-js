// @ts-check


// Warto w JS podawać wartości domyślne dla parametrów jeśli to tylko możliwe.
function sumTwoNumbers(a = 0, b = 0) {
	console.log(a);
	console.log(b);
	return a + b
}


console.log(sumTwoNumbers())
console.log(sumTwoNumbers(1))
console.log(sumTwoNumbers(1, 2))
console.log(sumTwoNumbers(1, 2, 3))
console.log(sumTwoNumbers(1, 2, 3, 8))


console.log(sumTwoNumbers('a', 'b'))


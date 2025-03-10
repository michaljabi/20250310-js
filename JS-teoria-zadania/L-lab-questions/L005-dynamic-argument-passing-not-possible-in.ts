
function sumTwoNumbers(a: number, b: number): number {
	console.log(a);
	console.log(b);
	return a + b
}



console.log(sumTwoNumbers())
console.log(sumTwoNumbers(1))


console.log(sumTwoNumbers('a', 'b'))
console.log(sumTwoNumbers(1, 2))
console.log(sumTwoNumbers(1, 2, 3))
console.log(sumTwoNumbers(1, 2, 3, 8))


// celowy zapis żeby TS traktował ten plik jako "moduł" (osobny)
export {};
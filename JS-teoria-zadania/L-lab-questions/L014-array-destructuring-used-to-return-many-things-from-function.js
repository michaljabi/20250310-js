// Praktyczny use-case destrukturyzacji tablicy
// Wykorzystanie funkcji do działania jak procedura (zwrócenie kilku wartości)
// PS. Tak naprawda to symulacja bo zwracamy jedną wartość Array!

function iAmProcedure() {
    return [20, 12, 'division']
}


const [result1, result2, operation] = iAmProcedure();


console.log(result1)
console.log(result2)
console.log(operation)
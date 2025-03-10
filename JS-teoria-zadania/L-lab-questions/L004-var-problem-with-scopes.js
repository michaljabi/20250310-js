// Wyjaśnij różnice między let i var

const text = 'Numer to:'

for(var x = 0; x <= 4; x++) {
    console.log(text, x)
}
console.log(x);


// Dlatego nie chcemy używać var
// ponieważ nie ma zakresu leksykalnego (wypłynie poza znaki {} )
{
    var z = 100
}
console.log(z)

{
    let y = 80
}
console.log(y);



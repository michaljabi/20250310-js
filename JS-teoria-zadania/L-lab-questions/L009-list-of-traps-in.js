/**
 * Pułapki w JS, których zajomość pomaga nam sprawniej poruszać się po języku
 * 
 * 
 * 1. Brak wartości to - wartość 'undefined' (typ prosty)
 * 2. Implicit Type Coertion - opracje typu 1 + '1' + true + {} -> są niestety dozwolone i nie generują błędu
 * 3. Typy proste porównywane z == -będą dodatkowo rzutowane, dlatego 1 == '1' daje -> true
 * 4. Do instrukcji if() można wrzucić dowolną wartość lub referencję - bo zostanie zrzutowana na boolean
 *      - jest to wykorzystywane w codebase i ma swoje wygodne "zastosowanie"
 *      - wartości takie jak: false, 0, '', NaN - to tzw. "falsy values", czyli rzeczy które po rzutowaniu na boolean dają = false
 * 5. NaN to nie stała! a dodatkowo jest typu prostego number, co sprawia że potrzebujemy: Number.isNaN do sprawdzenia czy coś nie jest NaN
 * 6. typeof jest niebezpieczny w przypadku `null` - to BUG w JS bo zwraca "object"
 * 7. Dzielenie przez "0" jest możliwe i nie generuje błędu tylko stałą: Infinity
 * 8. Asynchroniczność w JS determinuje kolejność wykonywania działań (istnieją taski i microtaski)
 *      - w skrócie: niektóre zapisy wykonywane "linia po lini" mogą nas zaskoczyć faktyczną kolejnością ich wykonania
 *      - będzie ona bardziej "oczywista" jeśli poznamy setTimeout, setInterval (taski) oraz Promise (mikrotaski)
 * 9. JS pozwala DOWOLNIE rozszerzać obiekty, DYNAMICZNIE zmieniać typy oraz DOWOLNIE przekazywać ilość argumentów do funkcji, metod i konstuktorów
 * 10. występuje hoisting deklaracji funkcji (dobry, bo można go wykorzystać) i słów kluczowych var (niedobry, kolejny powód żeby nie stosować var !!!!)
 * 11. Słowo kluczowe this zachowuje się inaczej w zaleśności od kontekstu (JS context)
 */
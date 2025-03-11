

// PROVIDER
function getVatTaxRateFromServer(calculations) {
	

	setTimeout(() => {
		calculations(0.23)
		// calculations(0.21)
	}, 3000)
}

// #1 Zadanie:
// Nie modyfikując funkcji getVatTaxRateFromServer,
// wywołaj ją i przekaż odpowiedni callback
// tak aby odebrać wartość podatku i przeliczyć ceny po uwzględnieniu VAT
// wymyśl te cenę - np. wartość koszyka = 300 zł
// Przykładowo pokazanie wyniku:
// console.log(300 + 300 * vatRate) // gdzie vatRate to odebrany argument z callback

// pokaż na ekranie 0.23
// jak odebrać 0.23


// CONSUMER
getVatTaxRateFromServer((vat) => {
	console.log(vat);
})

# My First Node.js project.

## Cel

> Napiszę program do wyświetlania bannerów w terminalu. Użyję do tego JavaScript w Node.js potem dorzucę TS (`tsc` compiler)


### Kroki

1. Utworzenie projektu Node.js za pomocą komendy
```
npm init -y
```
2. Robię miejsce na pliki źródłowe, katalog:
```
./src
```
3. Tworzę plik startowy programu:
```
./src/main.js
```
4. Wpisuje pierwszy `console.log` np.
```javascript
console.log('Witaj w BannerShow');
```
5. Uruchamiam żeby sprawdzić czy działa:
```
node ./src/main.js
```
6. Dopisuje do [package.json](./package.json) skrypt żeby uruchomić program *
```json
"start": "node ./src/main.js" 
```
7. Sprawdzam czy skrypt działa *
```
npm run start
```
8. Połączenie modułowe plików za pomocą ESM `import/export`
8.1 Na początek zmiana w [package.json](./package.json):
```
"type": "module"
```
8.2 Potem trzeba pamiętać o _explicite_ `export` tego co ma być dostępne i _explicite_ `import` tego co chcemy używać

--- 

9. Utwórz w `make-banner.js` funkcje `makeBanner` która dla `text` input wygeneruje banner w fromacie, np. dla "Hello"

```
*********
* HELLO *
*********
```
10. Zastosuj tą funkcję w `main.js` dla przykładowego tekstu, wymyśl ten tekst.

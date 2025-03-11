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
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
console.log('Witaj w BannerShow')
```

5. Uruchamiam żeby sprawdzić czy działa:

```
node ./src/main.js
```

6. Dopisuje do [package.json](./package.json) skrypt żeby uruchomić program \*

```json
"start": "node ./src/main.js"
```

7. Sprawdzam czy skrypt działa \*

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

11. utwórz nowy folder w src nazwij go `app` a w środku `app` przygotuj: `math-operations.js`
12. `math-operations.js` powinno exportować funkcję `divideBy` , zaprojektuj ją tak aby nie pozwalała dzielić przez `0` - rzucała wyjątek ( `new Error` ) z odpowiednim komunikatem.
13. Wywołaj divideBy bez błędu i z błędem (przekaż 0 jako 2gi argument) w `main.js` i obsłuż blokami `try` - `catch` .
14. skorzystaj z materiału: `c202` i dokumentacji MDN

15. Przechodzimy na typescript - migrujemy projekt z `.js` do `.ts`. na dobry początek instalujemy TS komendą:

```
npm install -D typescript
```

16. dopisujemy skrypt który pozwoli nam wygenerować konfigurację typescripta:

```json
"ts-init": "tsc --init"`
```

i uruchamiamy go!

17. `tsc` to tzw. _CLI_ (Command Line Interface) a jego nazwa to skrót od (`type-script-compiler` = `tsc`).

- CLI działają w konsoli a nie bezpośrednio w naszym kodzie
- wywołujemy ich komendy za pomocą skryptów `npm` lub z użyciem `npx` (w zależności od dokumentacji narzędzia)

18. Instalujemy `eslint` - CLI tool do lintowania naszego kodu `JS/TS`. Tutaj inna komenda, do `init`:

```
npm init @eslint/config@latest
```

19. Dopisujemy skrypt do lintowania w [package.json](./package.json):

```json
  "lint": "eslint src"
```

20. Dodatkowy zestaw reguł do naszego [eslint.config.js](./eslint.config.js):

```javascript 
{
    rules: {
      'no-var': ['error'],
      'no-shadow': ['warn']
    },
  }
```

21. Dodatkowy skrypt w [package.json](./package.json) który poprawi "auto fixable" issues przy lintowaniu:

```json
 "lint:fix": "eslint src --fix"
```

22. Przechodzimy do konfiguracji `typescript`, w pliku [tsconfig.json](./tsconfig.json) wprowadzamy kilka zmian:

```json
"allowJs": true,
"rootDir": "./src",
"outDir": "./dist",
"module": "ESNext"
```

dodatkowo poza `compilerOptions` ustawiamy:

```json
  "exclude": ["./eslint.config.js"],
  "include": ["src/**/*.ts"]
```

23. Zmieniamy rozszerzenie pliku `.src/main.js` na [main.ts](./src/main.ts) i dopisujemy skrypt do uruchomienia budowania projektu w [package.json](./package.json):

```json
 "build": "tsc"
```

24. Uruchamiamy `npm run build` żeby zobaczyć co pojawi się w `./dist`

25. Doinstalowujemy `npm i -D tsx` - narzędzie do uruchamiania `.ts` bezpośrednio, i naprawiamy skrypt `start` + dopisujemy `dev`:

```json
 "start": "node ./dist/main.js",
 "dev": "tsx watch ./src/main.ts"
```

26. Teraz `start` i `dev` powinny działać (możemy sprawdzić w okienku _View -> Open View -> NPM_)

27. Migrujemy pozostałe pliki do `.ts` ustawiając im rozszerzenia i poprawiając typowanie. Finalnie mamy pliki:

- [make-banner.ts](./src/make-banner.ts)
- [math-operations.ts](./src/app/math-operations.ts)

28. Instalujemy dla sprawdzenia `dependencies` - `lodash`:

```
npm i lodash
```

29. Doinstalowujemy mu definicje typów:

```
npm i -D @types/lodash
```
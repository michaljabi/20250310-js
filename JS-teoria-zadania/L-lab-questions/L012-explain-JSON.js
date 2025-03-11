const obj = {name: 'Michał'}

// serializacja do JSON (czyli do stringa w specjalnej notacji)
JSON.stringify(obj) //=

// deserializacja do plane objects + arrays etc.
JSON.parse("{}") //=
JSON.parse("[]") //=
JSON.parse("[1, 2, 3, 4]") //=

JSON.parse('{"myName":"Michał"}') //=
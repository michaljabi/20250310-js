// Składnia tzw CommonJS require/module.exports (2009r.) 
const sayHelloWorld = require('./say-hello-world');

sayHelloWorld.sayHello();

console.log('Your lucky number is', sayHelloWorld.LUCKY_NUMBER)

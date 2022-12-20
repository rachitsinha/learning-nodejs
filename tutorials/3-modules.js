// Modules
// Modules are encapsulated code
// Node uses CommonJS module (by default)
// Every file in NodeJS is a module
const names = require('./3a-names');
const sayHello = require('./3b-utils');


console.log(names);

sayHello(names.john);
sayHello(names.peter);
sayHello('susan');
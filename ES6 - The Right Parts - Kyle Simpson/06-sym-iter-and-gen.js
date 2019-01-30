// Symbols, iterators, and generators
// Now there are seven primitive types thanks to symbols
// Symbols are unique and globally un-guessable value within the context of the program
var x = Symbol();

// We can add a label inside the Symbol()
var y = Symbol('Any description here');

// Can we set two symbols to be equal to another?
var a = Symbol('I am a symbol');
var b = Symbol('I am a symbol');
console.log(a === b); // false since symbols are unique

// Symbols can be used to hide variable names
var x = Symbol('Hello World!');

var obj = {
  id: 123
};

obj[x] = 'This is a secret!';
// Does not return the symbol
console.log(obj); // {id: 123, Symbol(Hello World!): "This is a secret!"}

// What if we try to get object keys from obj?
Object.keys(obj); // ['id']

// ==================================================

// ES6 comes with well-known symbols
// These symbols serve as meta extension hooks
Symbol.iterator;
Symbol.toStringTag;
Symbol.toPrimitive;
Symbol.isConcatSpreadable;

// ==================================================

// What are iterators?
// Iterators are a patterned way of stepping through a set of data on some data source
// To designate a symbol which is an iterator
Symbol.iterator;

// We can use Symbol.iterator
var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();

// We can even call next() on the iterator
// On the 4th iteration, value is undefined so done returns true - we are done iterating
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }

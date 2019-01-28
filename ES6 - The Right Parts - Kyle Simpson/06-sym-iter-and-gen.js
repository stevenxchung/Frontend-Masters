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

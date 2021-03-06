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

// ES6 added for loop with keyword of for iterators
for (var v of arr) {
  console.log(v);
}

// Also applicable to a string
var str = 'Hello';
for (var v of str) {
  console.log(v);
}

// ==================================================

// How do we make our own custom iterators?
// Let's try to make this object into an iterable
var obj = {
  // Remember that an iterator is an object with a next() object attached to it
  [Symbol.iterator]() {
    // Initialize start and stop index
    var idx = this.start,
      en = this.end;
    // Variable 'it' will return every value within specified range
    var it = {
      // Use an arrow function since we need to use the keyword 'this' to refer to the idx variable in the outer scope
      next: () => {
        // Not done until start index becomes greater than the end index
        if (idx <= en) {
          var v = this.values[idx];
          idx++;
          return { value: v, done: false };
        } else {
          return { done: true };
        }
      }
    };
    return it;
  },
  values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  start: 4,
  end: 13
};

// Spread object into array and declare as 'vals'
var vals = [...obj];
console.log(vals); // [ 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 ]

// ==================================================

// What are generators?
// Generators look similar to functions, they are in fact functions but they do not get called
function* main() {
  console.log('hello');
}

main(); // No output

// Generators construct variables, then you can use iterators to control the generator
var it = main();
// Generators can be stopped and started as many times as needed
it.next(); // hello

// By using yield, we can get main() to return different results
function* main() {
  console.log('hello');
  yield 9;
  console.log('world');
  return 10;
}

var it = main();

it.next(); // { value: 9, done: false }
it.next(); // { value: 10, done: true }

// What would happen here?
function* main() {
  console.log('hello');
  yield 9;
  console.log('world');
  return 10; // Would be changed to yield to return hello, 9, world, and 10
}
// Done returns true before the value 10 is printed out
for (var v of main()) {
  console.log(v); // hello, 9, and world
}

// Generators are really state machines
function* main() {
  for (var i = 0; i < 5; i++) {
    // Pause here each time until the next call, it remembers its state
    yield i;
  }
}
// Loop calls next() each time on main()
for (var v of main()) {
  console.log(v); // 0, 1, 2, 3, 4
}

// ==================================================

// Going back to this example, how do we make obj iterable?
var obj = {
  [Symbol.iterator]() {
    var idx = this.start,
      en = this.end;
    var it = {
      next: () => {
        if (idx <= en) {
          var v = this.values[idx];
          idx++;
          return { value: v, done: false };
        } else {
          return { done: true };
        }
      }
    };
    return it;
  },
  values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  start: 4,
  end: 13
};

var vals = [...obj];
console.log(vals); // [ 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 ]

// The obj iterator came be simplified by using a generator
var obj = {
  // We can turn this into a generator with the '*'
  *[Symbol.iterator]() {
    // Loop over all values from start to end
    for (var i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  start: 4,
  end: 13
};

var vals = [...obj];
console.log(vals); // [ 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 ]

// ==================================================

// Here's how we make a range in ES6
Number.prototype[Symbol.iterator] = function*() {
  for (var i = 0; i <= this; i++) {
    yield i;
  }
};

console.log([...8]); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// ==================================================

// So what is the point of ES6?
// The goal of ES6 is to write code that is more clear and self-descriptive
// We like to optimize code more for the reader than the writer, in most cases it is for the writer only, ES6 tries to address this problem and improve it

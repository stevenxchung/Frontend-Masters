// Default values
// Given the function below
function foo(x) {
  // If x is truthy, return x, else return 42
  x = x || 42;
  return x;
}

// What happens if we pass in zero?
foo(0); // 42, since 0 is falsey

// How can we rewrite this to be more readable?
function foo(x) {
  // Here it is easy to see that if value is not undefined, return x
  x = x !== undefined ? x : 42;
  return x;
}

// Above we have the imperative form, below we have the declarative form
// Here x will be 42 by default if undefined
function foo(x = 42) {
  return x;
}

foo(undefined); // 42

// What is the result here?
foo.apply(null, []); // 42

// ==================================================

// We can also assign functions to variables
// How many times is bar() called before foo() is invoked?
// 0
function bar() {
  console.log('!');
}

function foo(x = bar()) {
  return x;
}

// How many times is bar() called when foo() is invoked?
foo(); // Here bar() is called once, bar() is only called if needed this is called lazy expression

// When will we ever use lazy expressions?
// Here if id is not provided for foo(), error message will be thrown
function required() {
  throw 'Parameter required!';
}

function foo(id = required()) {
  return x;
}

foo();

// Bonus 1
// What does foo() return below?
var x = 1;

function foo(
  x = 2,
  f = function() {
    return x;
  }
) {
  console.log(f());
}

foo(); // 2

// Bonus 2
// What does foo() return below?t
var x = 1;

function foo(
  x = 2,
  f = function() {
    return x;
  }
) {
  var x = 5;
  console.log(f());
}

foo(); // 5, although Chrome returns 2, that is due to a bug

// ==================================================

// Gather and spread operators
// Imperative form
function foo() {
  // Gather arguments
  var args = [].slice.call(arguments);
  // Add something to args
  args.unshift(42);
  // Pass args to bar
  bar.apply(null, args);
}

// Declarative form
// Usage of ... depends on the context
// Here ... gathers arguments together
function foo(...args) {
  args.unshift(42);
  // Here we use the ... to spread the array out
  bar(...args);
}

// ==================================================

function foo(...args) {
  // For spread operators, we can just add 42 on to the array
  bar(42, ...args);
}

// What is the difference between imperative and declarative?
// Imperative programming includes all the implementation details of how
// Declarative programming abstracts the details and lets us focus on the key implementation

// Although there is support for default values for individual variables, default variables for spreaded arguments are not supported
function foo(
  x = 5 // Supported
  // ...args = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // Not supported
) {
  // ...
}

// ==================================================

// Gathering and spreading arrays
// Imperative form
var x = [1, 2, 3];
var y = [4, 5];
var z = [0].concat(x, y, [6]);

// Declarative form
var x = [1, 2, 3];
var y = [4, 5];
var z = [0, ...x, ...y, 6];

// ==================================================

// What is Babel?
// Babel is a JavaScript compiler that allows code to be browser-compatible
// The value of writing in ES6 is that it allows us to better communicate code

// ES6 Code
function foo(x = 42, ...args) {
  bar(10, ...args, 100);
}

function bar() {}

// Babel output
"use strict";

function foo() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 42;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  bar.apply(undefined, [10].concat(args, [100]));
}

function bar() {}

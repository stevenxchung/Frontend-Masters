// Destructuring
// Let's look at some patterns which can help improve the way you code
// Imperative destructuring
function foo() {
  return [1, 2, 3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

// Declarative destructuring (array destructuring)
function foo() {
  return [1, 2, 3];
}

var [a, b, c] = foo();

// What if foo() only returns two items?
function foo() {
  return [1, 2];
}
// Here var at [c] will be undefined, var [a, b, c] is still valid
var [a, b, c] = foo();

// foo() can also return more than three items
function foo() {
  return [1, 2, 3, 4];
}
// Here var at [a, b, c] will be defined, however the [4] will be thrown away when foo() returns [1, 2, 3, 4]
var [a, b, c] = foo();

// ==================================================

// Setting the default value imperatively
function foo() {
  return [1, 2, 3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1] !== undefined ? tmp[1] : 42;
var c = tmp[2];

// Setting the default value declaratively
function foo() {
  return [1, 2, 3];
}
// Here it's easier to read
var [
  a,
  b = 42,
  c
] = foo();

// What if tmp[0] was undefined?
function foo() {
  return null;
}
// tmp[0] would return a JavaScript error since foo() returns null
var [
  a,
  b = 42,
  c
] = foo();

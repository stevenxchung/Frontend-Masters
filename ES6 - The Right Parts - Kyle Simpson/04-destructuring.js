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
var [a, b = 42, c] = foo();

// What if tmp[0] was undefined?
function foo() {
  return null;
}
// tmp[0] would return a JavaScript error since foo() returns null
var [a, b = 42, c] = foo();

// We can guard against null by issuing an alterative return of []
function foo() {
  return null;
}

var [a, b = 42, c] = foo() || [];

// What if we only want to account for the first three values?
function foo() {
  return [1, 2, 3, 4, 5, 6];
}
// Use the gather operator (assignment context)
var [a, b = 42, c, ...args] = foo() || [];

// What about adding an object?
function foo() {
  return [1, 2, 3];
}
// This is still valid
var o = {};

[o.a, o.b = 42, o.c, ...o.args] = foo() || [];

// ==================================================

// Here's how swapping is typically done
{
  let tmp = x;
  x = y;
  y = tmp;
}

// Declaratively we can swap like so
var x = 10,
  y = 20;

[x, y] = [y, x];

// How to swap out arrays
var a = [1, 2, 3];

[x, y, ...a] = [0, ...a, 4];

// To add more readibility we can use var x
var a = [1, 2, 3];
// Dump variable
var x;

[x, x, ...a] = [0, ...a, 4];

// But you can actually do this
var a = [1, 2, 3];
// This is still valid
[, , ...a] = [0, ...a, 4];

// This is what happens in the browser
('use strict');

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

// But you can actually do this
var a = [1, 2, 3];
// This is still valid

var _ref = [0].concat(_toConsumableArray(a), [4]);

a = _ref.slice(2);
_ref;

// ==================================================

// We can also destructure nested arrays
function foo() {
  return [1, 2, 3, [4, 5, 6]];
}
// General assignment syntax
var a, b, c, args, d, e;
// We can also replace [d, , e] with [...args]
[a, b = 42, c, [d, , e]] = foo() || [];

// Is this syntax valid?
function foo() {
  return [1, 2, 3, [4, 5, 6]];
}

var a, b;
// This assignment is still valid, destructuring breaks down the array into a pattern
var x = ([a, b] = foo());

// Can we combine patterns?
function foo() {
  return [1, 2, 3, [4, 5, 6]];
}
var a, b, c, d, args;
// We can combine patterns to destructure an array
[, , , [c, d]] = [a, b, ...args] = foo();

console.log([a, b, ...args]); // [1, 2, 3, [4, 5, 6]]
console.log([, , , [c, d]]); // [, [4, 5]]

// ==================================================

// Let's explore object destructuring
// Imperative, pre-ES6 object destructuring
function foo() {
  return { a: 1, b: 2, c: 3 };
}

var tmp = foo();
var a = tmp.a;
var b = tmp.b !== undefined ? tmp.b : 42;
var c = tmp.c;

// Declarative, ES5 object destructuring
function foo() {
  return { a: 1, b: 2, c: 3 };
}

// To assign X to 2, where X is the target not the source
var { a, b: X, c } = foo();

// We can also add a default value
function foo() {
  return { a: 1, b: 2, c: 3 };
}
// Guarding against null values also apply
var { a = 10, b: X = 42, c } = foo() || {};

// ==================================================

// As with nested array destructuring, we could also have nested object destructuring
function foo() {
  return { a: 1, b: 2, c: 3, d: { e: 4 } };
}
// Here d needs to match the destructuring pattern with { e }
var {
  a = 10,
  b: X = 42,
  c,
  d: { e }
} = foo() || {};

// Here d does not exist as a return value for foo()
function foo() {
  return { a: 1, b: 2, c: 3 };
}
// Property d needs to have a default value of {}
var { a = 10, b: X = 42, c, d: { e } = {} } = foo() || {};

// Let's say we have a pattern like this
// { a: X = 2 } = ...
// First the computer will look to see if there is an 'a' property in the expected object, if not, it will get the default value 2 in place of the property which would otherwise be undefined

// An alternative way to write nested object destructuring
function foo() {
  return { a: 1, b: 2, c: 3 };
}

var a, X, c, e;
// Must have parenthesis
({ a = 10, b: X = 42, c, d: { e } = {} } = foo() || {});

// ==================================================

// Destructuring is applicable to function parameters
function foo([a, b, c]) {
  console.log(a, b, c);
}
// What will happen here?
foo(1, 2, 3); // Returns undefined

// The more proper way to destructure function parameters
function foo([a, b, c] = []) {
  console.log(a, b, c);
}
// What will happen here?
foo([1, 2, 3]); // Returns 1, 2, 3

// What about objects?
// For any function that takes three or more arguments, object destructuring could help organize function parameters
function foo({ a = 1, b = 2, c = 3 } = {}) {
  console.log(a, b, c);
}
// Here it does not matter if we leave out a property or the order is different
foo({ c: 10, b: 20 });

// Exercise 1
// Using what we learned in this section about block scope, return true
var x = 2,
  fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    // ...
  }
})();

console.log(x * 2 === fns[x * 2]()); // True

// ==================================================

// Initial attempt, no const or let
var x = 2,
  fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    fns[i] = function num() {
      return i - 1;
    }
  }
})();

console.log('x * 2 = ', x * 2); // 4
console.log('fns[x * 2]() = ', fns[x * 2]()); // 4

console.log(x * 2 === fns[x * 2]()); // True

// ==================================================

// With const and let
const x = 2;
var fns = [];

(function() {
  const x = 5;

  for (let i = 0; i < x; i++) {
    fns[i] = function num() {
      return i;
    }
  }
})();

console.log('x * 2 = ', x * 2); // 4
console.log('fns[x * 2]() = ', fns[x * 2]()); // 4

console.log(x * 2 === fns[x * 2]()); // True

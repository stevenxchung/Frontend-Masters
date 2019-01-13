// Exercise 2
// Use gather and spreads to return the following
function foo() {}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo();
}

console.log(bar().join('') === '281012');

// ==================================================

// Initial attempt
function foo(x1, x2) {
  return [x1[0], ...x2.splice(1)];
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(a1, a2);
}

// Log output
console.log(bar().join(''));
console.log(bar().join('') === '281012');

// ==================================================

// Solution
// By only using x and ..rest we are effectively ignoring the 2nd and 3rd numbers
function foo(x, y, z, ...rest) {
  return [x, ...rest];
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(...a1, ...a2);
}

// Log output
console.log(bar().join(''));
console.log(bar().join('') === '281012');

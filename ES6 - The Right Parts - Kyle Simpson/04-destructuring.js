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

// Functions vs arrow functions
// Some things to keep in mind: is it easier to read the arrow function or the classical function?
// The arrow function seems simple, shorter, more intuitive at first
foo = x => 2;
// The classical function might be more readible to most users vs the arrow function
function foo() {
  return 2;
}

// Syntax variations
// There are various ways to write the arrow function
/*
=> 3
() => 3
x => 3
(...x) => 3
(x, y) => 3
x => { try { 3; } catch(e) {} }
x => { return 3; }
x => ({ y:x })
*/

// Arrow functions are anonymous functions, there are no names attached to the arrow
// You can name inference arrow functions
var foo = x => 3;
foo.name; // 'foo'
// However, most of the arrow functions you will write will be anonymous
foo(x => 3);

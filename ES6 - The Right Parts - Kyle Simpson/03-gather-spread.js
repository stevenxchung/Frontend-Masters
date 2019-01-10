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

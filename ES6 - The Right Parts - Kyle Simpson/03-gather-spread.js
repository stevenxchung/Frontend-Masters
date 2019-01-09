// Default values
// Given the function below
function foo(x) {
  // If x is truthy, return x, else return 42
  x = x || 42;
  return x;
}

// What happens if we pass in zero?
foo(0) // 42, since 0 is falsey

// How can we rewrite this to be more readable?
function foo(x) {
  // Here it is easy to see that if value is not undefined, return x
  x = x !== undefined ? x : 42;
  return x;
}

// ==================================================

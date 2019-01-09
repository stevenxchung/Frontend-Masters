// Default values

// Before
// Given the function below
function foo(x) {
  // If x is truthy, return x, else return 42
  x = x || 42;
  return x;
}

// What happens if we pass in zero?
foo(0) // 42, since 0 is falsey

// ==================================================

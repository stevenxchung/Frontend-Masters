// Block scoping - let vs var
function foo(x, y) {
  if (x < y) {
    // Here var attaches tmp to the scope of foo() not to the if statement
    var tmp = x;
    x = y;
    y = tmp;
  }
  // Here we signal to the reader that the variable i belongs to the for loop
  // However you can still use i outside of the for loop
  for (var i = 0; i < 10; i++) {}
}

// Using let we can actually limit the variables to their scope
function foo(x, y) {
  if (x < y) {
    // Here let attaches tmp to the scope of the if statement
    let tmp = x;
    x = y;
    y = tmp;
  }
  // Here we signal to the reader that i actually belongs to the scope of the for loop
  // The variable i cannot be used outside of the loop
  for (let i = 0; i < 10; i++) {}
}

// In general, the var keyword is intended to be used across the whole function
// The let keyword is intended to be used to signal to the reader that the scope is limited
function foo(x, y) {
  var z = x * 2;
  if (x < y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  for (let i = 0; i < 10; i++) {}
}

// But we have to still be careful with let...
function foo(x, y) {
  // Here we try to find an error
  // However, because z is only declared inside the try-catch, another error will be thrown stating that z does not exist
  try {
    let z = bar(x * 2);
  } catch (err) {}
  if (x < y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  for (let i = 0; i < 10; i++) {}
}

// We can resolve this issue by declaring z outside of the try catch but this increases the scope of z to be available throughout the scope of foo()
function foo(x, y) {
  let z;
  try {
    z = bar(x * 2);
  } catch (err) {}
  if (x < y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  for (let i = 0; i < 10; i++) {}
}

// But what if your code is 1000 lines complicated and readability becomes an issue?
// We should declare z twice but let only allows you to declare z once
function foo(x, y) {
  // Here we use var in this example because var allows you to declare z more than once
  // We do this mainly for readability, which may or may not be needed depending on the code
  // if ( ... ) {
  //   var z = ...
  //   // 1000 lines of code later...
  // } else if ( ... ) {
  //   var z = ...
  //   // 1000 lines of code later...
  // } else {
  //   var z = ...
  // }
}

// ==================================================

// What's the difference between var and let?
function foo(x, y) {
  // Here i is only one variable
  for (var i = 0; i < 10; i++) {
    $('#btn' + i).click(function() {
      console.log(' button ' + i + 'clicked!');
    });
  }
}

function foo(x, y) {
  // Here i is created 10 times
  for (let i = 0; i < 10; i++) {
    $('#btn' + i).click(function() {
      console.log(' button ' + i + 'clicked!');
    });
  }
}

// ==================================================

// What is const?
function foo(x, y) {
  if (x > y) {
    // Constant is a variable that cannot be reassigned
    {
      const x = 2,
        y = x * 3;
      // ...
    }
  }
}

// Here x cannot be reassigned
const x = 3;

// However using const does not mean the result will not change
const x = [1, 2, 3];
// The result of the function foo could change
function foo(x) {
  // ...
}

// If we want x to be immutable use Object.freeze()
const x = Object.freeze([1, 2, 3]);

// ==================================================

// When should we use const?
// Here PI is a const as the mathematical pi is defined
// The reader is less likely to be confused whether or not PI is a const
const PI = 3.14;

// Here someFunction cannot be reassigned to a different value, however that does not mean that the result of someFunction() will be constant
var i = 0;

const someFunction = () => {
  i++;
  console.log(i);
  return i;
};

document.body.addEventListener('click', someFunction, true);

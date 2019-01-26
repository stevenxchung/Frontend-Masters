// Template strings
// Extensions added to the object literal syntax
var a = 1;
// Before ES6 you would have to declare the following for 'a'
var obj = {
  a: a
};
// In ES6, if the property name and value are the same we can declare 'a' to be
var obj = {
  // This is by using concise properties
  a
};

// We also have concise methods
// Before we would write something like this
var obj = {
  a,
  b: function() {}
};
// Concise methods look like this
var obj = {
  a,
  b() {}
};

// However, when we use concise methods the function is anonymous
var obj = {
  a,
  // The property 'b' is an anonymous function
  b: function() {}
};
// Babel's equivalent
('use strict');

var obj = {
  a: a,
  // But wait... this is not an anonymous function...
  // It turns out this is how Babel names functions (easiest way)
  b: function b() {}
};
// If we try to convert b() {} to b() { b() }, suddenly Babel's equivalent is much more complex
('use strict');

var obj = {
  a: a,
  b: (function(_b) {
    function b() {
      return _b.apply(this, arguments);
    }

    b.toString = function() {
      return _b.toString();
    };

    return b;
  })(function() {
    b();
  })
};

// What if we use 'hello world' as the concise method name?
var obj = {
  a,
  'hello world'() {}
};
// It turns out that this is not in the spec, Babel came up with their own way around it
('use strict');

var obj = {
  a: a,
  'hello world': function helloWorld() {}
};

// We can also have computed properties
var a = 1;
var c = 'hello';
var obj = {
  a,
  b() {},
  // [c] is actually 'hello'
  [c]: 42,
  // Computed properties can also be used for method names
  [c + 'fn']() {},
  // Concise generator
  *foo() {},
  // Concise computed property which is also a generator
  *[c + 'gn']() {}
};

// ==================================================

// Without string templating, this is how we interpolate variables into a sentence
var name = 'Steven';
var orderNumber = '123';
var total = 99.99;

var msg =
  'Hello, ' + name + ', your order (#' + orderNumber + ') was $' + total + '.';

console.log(msg);

// With ES6 we can use use the backtick to interpolate variables
var name = 'Steven';
var orderNumber = '123';
var total = 99.99;

var msg = `Hello, ${name}, your order (#${orderNumber}) was $${total}.`;

console.log(msg);

// ==================================================

// It is also possible to use tag functions for interpolation
// Tag function serves as a pre-processor for strings such that formating variables is possible
function foo(strings, ...values) {
  // What goes here?
  var str = '';
  for (var i = 0; i < strings.length; i++) {
    if (i > 0) str += values[i - 1];
    str += strings[i];
  }
  return str;
}

var name = 'Steven';
var orderNumber = '123';
var total = 99.99;

var msg = foo`Hello, ${name}, your order (#${orderNumber}) was $${total}.`;

console.log(msg); // Hello, Steven, your order (#123) was $99.99.

// Another example: what if we want to make it such that numbers need 2 decimal places?
function currency(strings, ...values) {
  var str = '';
  // Loop through array of strings
  for (var i = 0; i < strings.length; i++) {
    // If index is greater than zero check if number and make it 2 decimal places
    if (i > 0) {
      if (typeof values[i - 1] == 'number') {
        str += values[i - 1].toFixed(2);
      } else {
        // Otherwise just append value to str
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

var name = 'Steven';
var orderNumber = '123';
var total = 405.5;

var msg = currency`Hello, ${name}, your order (#${orderNumber}) was $${total}.`;

console.log(msg); // Hello, Steven, your order (#123) was $405.50.

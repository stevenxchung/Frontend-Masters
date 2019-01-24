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

// What if we use hello world as the property name?
var obj = {
  a,
  'hello world'() {}
};
// It turns out that this is not in the spec, Babel came up with their own way around it
'use strict';

var obj = {
  a: a,
  'hello world': function helloWorld() {}
};

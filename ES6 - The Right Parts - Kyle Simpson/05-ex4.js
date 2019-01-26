// Exercise 4
// Use tag function and string interpolation template to get console.log() to return true
function upper(strings, ...values) {}

var name = 'Steven',
  twitter = 'getify',
  classname = 'es6 workshop';

console.log(
  `Hello ____ (@____), welcome to the ____!` ===
    'Hello STEVEN (@GETIFY), welcome to the ES6 WORKSHOP!'
);

// ==================================================

// Initial attempt
function upper(strings, ...values) {
  var str = '';
  for (var i = 0; i < strings.length - 1; i++) {
    str += strings[i] + values[i].toUpperCase();
  }
  str += strings[strings.length - 1];
  return str;
}

var name = 'Steven',
  twitter = 'getify',
  className = 'es6 workshop';

console.log(upper`Hello ${name} (@${twitter}), welcome to the ${className}!`);

console.log(
  upper`Hello ${name} (@${twitter}), welcome to the ${className}!` ===
    'Hello STEVEN (@GETIFY), welcome to the ES6 WORKSHOP!'
);

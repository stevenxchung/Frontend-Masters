// Exercise 1
// Using what we learned in this section about block scope, return true
var x = 2,
  fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    // ...
  }
})();

console.log(x * 2 === fns[x * 2]()); // True

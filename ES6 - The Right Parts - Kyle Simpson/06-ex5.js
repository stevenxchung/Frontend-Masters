// Exercise 5
var numbers = {
  // ...
};

// Should print 0 to 100 by 1 step
for (let num of numbers) {
  console.log(num);
}

// Should print 6 to 30 in increments of 4
// for (let num of /* <insert array here> */) {
//   console.log(num);
// }

// ==================================================

// Initial attempt
var numbers = {
  arrayGen: function*(start = 0, end = 100, step = 1) {
    for (var i = start; i <= end; i += step) {
      yield i;
    }
  }
};

// Should print 0 to 100 by 1 step
for (let num of numbers.arrayGen()) {
  console.log(num);
}

// Should print 6 to 30 in increments of 4
for (let num of numbers.arrayGen((start = 6), (end = 30), (step = 4))) {
  console.log(num);
}

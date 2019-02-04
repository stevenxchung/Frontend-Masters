// Exercise 5
var numbers = {
  // ...
};

// Should print 0 to 100 by 1s
for (let num of numbers) {
  console.log(num);
}

// Should print 6 to 30 by 4s
for (let num of /* <insert array here> */) {
  console.log(num);
}

// ==================================================

// Initial attempt
var numbers = {
  arrayGen: function* (start = 0, end = 100) {
    for (var i = start; i <= end; i++) {
      yield i;
    }
  },
};

// Should print 0 to 100 by 1s
for (let num of numbers.arrayGen()) {
  console.log(num);
}

// Should print 6 to 30 by 4s
for (let num of numbers.arrayGen(start = 6, end = 30)) {
  console.log(num);
}

// let arrayGen = (start, end) => {
//   let arr = [];
//   for (var i = start; i <= end; i++) {
//     arr.push(i);
//   };
//   return arr;
// }

// console.log(arrayGen(1, 5))

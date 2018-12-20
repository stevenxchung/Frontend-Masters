// Exercise 0
// Rewrite using the arrow function
(function IIFE() {
  function foo(x) {
    var y = x * 2;
    return function bar(z) {
      if (z.length > 3) {
        return z.map(function baz(v) {
          if (v > 3) return v + y;
          else return baz(v * 4);
        });
      } else {
        var obj = [];
        setTimeout(
          function bam() {
            obj.length = 1;
            obj[0] = this.w;
          }.bind(this),
          100
        );
        return obj;
      }
    };
  }

  var p = foo(2);
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(function() {
    console.log(
      list1[0] ===
        list2.reduce(function(s, v) {
          return s + v;
        }, 0)
    );
  }, 200);
})();

// ==================================================

// First attempt rewriting using arrow
(IIFE = () => {
  // foo is not returning correctly
  let foo = x => {
    let y = x * 2;
    // Return bar(z)
    return (bar = z => {
      if (z.length > 3) {
        // Return baz(v)
        return z.map(
          (baz = v => {
            if (v > 3) {
              return v + y;
            } else {
              return baz(v * 4);
            }
          })
        );
      } else {
        let obj = [];
        setTimeout(
          (bam = () => {
            obj.length = 1;
            obj[0] = this.w;
          }),
          100
        );
        return obj;
      }
    });
  };

  let p = foo(2);
  let list1 = [1, 3, 4];
  let list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(() => {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    );
  }, 200);
})();

// ==================================================

// Solution
((foo, p, list1, list2) => {
  (foo = (x, y = x * 2) =>
    function bar(z, baz, obj) {
      if (z.length > 3) {
        return z.map((baz = v => (v > 3 ? v + y : baz(v * 4))));
      } else {
        obj = [];
        setTimeout(() => ((obj.length = 1), (obj[0] = this.w)), 100);
        return obj;
      }
    }),
    (p = foo(2)),
    (list1 = [1, 3, 4]),
    (list2 = list1.concat(6)),
    (list1 = p.call({ w: 42 }, list1)),
    (list2 = p(list2)),
    setTimeout(() => {
      console.log(list1[0] === list2.reduce((s, v) => s + v, 0));
    }, 200);
})();

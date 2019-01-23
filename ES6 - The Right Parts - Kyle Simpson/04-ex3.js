// Exercise 3
function ajax(url, cb) {
  // Fake ajax response
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// Will receive and destructure object
function response() {
  // Will take and arguments and restructure objects
  check({});
}

ajax('http://fun.tld', response);

// ==================================================

// Initial attempt
function ajax(url, cb) {
  // Fake ajax response
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// Will receive and destructure object
function response({
  foo = defaults.foo,
  bar = defaults.bar,
  baz,
  bam: { qux = defaults.bam.qux, qam = defaults.bam.qam } = {}
} = {}) {
  // Will take and arguments and restructure objects
  check({
    foo,
    bar,
    baz,
    bam: {
      qux,
      qam
    }
  });
}

ajax('http://fun.tld', response);

// ==================================================

// Optimal solution
function ajax(url, cb) {
  // Fake ajax response
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// Just use declared values
function response({
  foo = 0,
  bar = 4,
  baz,
  bam: { qux = 0, qam = 14 } = {}
} = {}) {
  // Will take and arguments and restructure objects
  check({
    foo,
    bar,
    baz,
    bam: {
      qux,
      qam
    }
  });
}

ajax('http://fun.tld', response);

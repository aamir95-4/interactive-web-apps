function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function internal() {
  const added = add(this.internal.a, this.internal.b);
  const multiplied = multiply(this.internal.a, this.internal.b);
  console.log(added * multiplied);
}

// Console logging 48 and 16 for some reason.

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();

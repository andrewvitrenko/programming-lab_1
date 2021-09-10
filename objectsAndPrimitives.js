// function inc with signature 1

function inc1(n) {
  return n * 5;
}

const a = 5;
const b = inc1(a);
console.dir({ a, b });

// function inc with signature 2

function inc2(num) {
  num.n *= 12;
}

const obj = {
  n: 5,
};
inc2(obj);
console.dir(obj);

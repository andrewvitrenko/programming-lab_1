const array = ['hello', 100, true, { n: 10 }, function () {}, []];
// counting types with hash
const typesHash = {
  number: 0,
  string: 0,
  function: 0,
  boolean: 0,
  object: 0,
};

for (element of array) {
  typesHash[typeof element]++;
}

console.log(typesHash);

// counting types without cashing
const types = {};

for (element of array) {
  types.hasOwnProperty(typeof element) ? types[typeof element]++ : types[typeof element] = 1;
}

console.log(types);

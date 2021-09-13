const array = ['hello', 100, true, { n: 10 }, function () {}, []];
// counting types in collection
const types = {
  number: 0,
  string: 0,
  function: 0,
  boolean: 0,
  object: 0,
};

for (let element of array) {
  types[typeof element]++;
}

console.log(types);

// clearing the collection
for (let key in types) {
  delete types[key];
}

for (let element of array) {
  types.hasOwnProperty(typeof element) ? types[typeof element]++ : types[typeof element] = 1;
}

console.log(types);

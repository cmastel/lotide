const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  // first check if arrays are equal length
  if (array1.length === array2.length) {
    // iterate through each value in the (equal length) arrays
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // return false as soon as one pair does not match
      }
    }
    return true; // return true if the for loop is able to finish (i.e. no unmatched pairs)
  } else {
    // if arrays are not equal length, return false
    return false;
  }
};


// TEST CODE

const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[word.length -1]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);


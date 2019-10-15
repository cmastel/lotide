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

const without = function(source, itemsToRemove) {
  let sourceWithout = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      sourceWithout.push(source[i]);
    }
  }

  return sourceWithout;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without(['One', 'Ring', 'Rule'], ['Rule', 'Them', '3']), ['One', 'Ring']);

// test to see if without function modifies the source array
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  // first check if arrays are equal length
  if (array1.length !== array2.length) {
    return false;
  }
    
  // iterate through each value in the (equal length) arrays
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      let check = eqArrays(array1[i], array2[i]);
      if (check === false) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false; // return false as soon as one pair does not match
    }
  }
  return true; // return true if the for loop is able to finish (i.e. no unmatched pairs)
}; 

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);

// RECURSIVE TEST CODE

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]);// => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]);// => false

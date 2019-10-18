const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['One', 'Ring', 'Rule'], ['One', 'Ring', 'Rule']), true);

// RECURSIVE TEST CODE

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);// => false
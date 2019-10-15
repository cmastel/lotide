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

const flatten = function(array) {
  let flatArray = [];

  // iterate through all elements in array
  for (let i = 0; i < array.length; i++) {
    // if element is not an array, add it to flatArray
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      // if element is an array, create subArray and iterate through that
      // adding elements to flatArray
      let subArray = array[i];
      for (let j = 0; j < subArray.length; j++) {
        flatArray.push(subArray[j]);
      }
    }
  }

  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], 2, [3, 4], 5, [6, 7, 8, 9]]), [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]);
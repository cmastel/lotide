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

const letterPositions = function(sentence) {
  let results = {'h': [0]};

  return results;
};


// TEST CODE

const testString = 'hello';
const testPosition = letterPositions(testString);
console.log(testPosition);
console.log(testPosition['h'].length);

assertArraysEqual(testPosition['h'], [0]); /*
assertArraysEqual(testPosition['e'], [1]);
assertArraysEqual(testPosition['l'], [2, 3]);
assertArraysEqual(testPosition['o'], [4]);
*/
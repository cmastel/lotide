
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

const eqObjects = function(object1, object2) {
// returns true if both objects have identical keys with identical values
// if not, returns false

  // check if objects are the same length
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) { // iterate through each key in object1
      
      if (Array.isArray(object1[key1])) { // check if value of key1 is an array
        if (!eqArrays(object1[key1], object2[key1])) { // if so, check if arrays are equal
          return false; // return false if they are not
        }
      } else if (object1[key1] !== object2[key1]) {
        return false; // return false if the key:value pairs do not match
      }
    }
    return true; // return true if the for loop is able to complete
  }

  return false; // return false if the object key arrays are not the same length
};

const assertEqualObjects = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqualObjects(ab, ba);

const abc = { a: '1', b: '2', c: '3' };
assertEqualObjects(ab, abc);

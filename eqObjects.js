const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
// returns true if both objects have identical keys with identical values
// if not, returns false

  // check if objects are the same length
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) { // iterate through each key in object1
      if (object1[key1] !== object2[key1]) {
        return false; // return false if the key:value pairs do not match
      }
    }
    return true; // return true if the for loop is able to complete
  }

  return false; // return false if the object key arrays are not the same length
};

// TEST CODE

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

const ac = { a: '1', c: '3' };
assertEqual(eqObjects(ab, ac), false);

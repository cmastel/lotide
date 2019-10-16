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
    for (var key1 in object1) {
      if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

// TEST CODE

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);

const ac = { a: '1', c: '3' };
assertEqual(eqObjects(ab, ac), false);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
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
      } else if (typeof object1[key1] === 'object') {
        return eqObjects(object1[key1], object2[key1]);
      }
      
      else if (object1[key1] !== object2[key1]) {
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

const cd = { c: '1', d: ['2', 3]};
const dc = { d: ['2', 3], c: '1'}
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: ['2', 3, 4]};
assertEqual(eqObjects(cd, cd2), false);

const cd3 = {c: '1', d: '4' };
assertEqual(eqObjects(cd, cd3), false);

// RECURSIVE TEST CODE

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { z: 1, pig: { can: 'fly', cant: 'talk' }, b: 2 }}, { a: { z: 1, pig: { can: 'fly', cant: 'talk' }, b: 2 }}), true)

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');


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
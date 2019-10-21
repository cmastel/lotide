const assertArraysEqual = require('../assertArraysEqual.js');


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);

// RECURSIVE TEST CODE

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]);// => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]);// => false

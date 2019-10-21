const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

// TEST CODE
const trialArray = ["Hello", "Lighthouse", "Labs"];
let tailArray = tail(trialArray);
const correctArray = ["Lighthouse", "Labs"];
assertEqual(tailArray, correctArray);
assertEqual(tailArray.join(), correctArray.join());

const numbers = [5, 6, 10, 2];
let tailNumbers = tail(numbers);
const expectedNumbers = [6, 10, 2];
assertEqual(tailNumbers.join(), expectedNumbers.join());
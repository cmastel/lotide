const head = require('../head.js');
const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([1, 2, 3]), 6);
assertEqual(head([1]), 1);
assertEqual(head([]), 1);

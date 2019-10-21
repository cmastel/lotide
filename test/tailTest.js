const assert = require('chai').assert;
const tail = require('../tail.js');

describe ('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const trialArray = ["Hello", "Lighthouse", "Labs"];
    const correctArray = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(trialArray), correctArray);
  });

  it("returns [6, 10, 2] for [5, 6, 10, 2]", () => {
    const numbers = [5, 6, 10, 2];
    const expectedNumbers = [6, 10, 2];
    assert.deepEqual(tail(numbers), expectedNumbers);
  })
});

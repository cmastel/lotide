const without = function(source, itemsToRemove) {
  let sourceWithout = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      sourceWithout.push(source[i]);
    }
  }

  return sourceWithout;
};

module.exports = without;
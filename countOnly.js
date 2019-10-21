const countOnly = function(allItems, itemsToCount) {
  // inputs: allItems --> array of items
  //         itemsToCount --> object with keys that match to items in allItems,
  //                          and true or false as the vale signifying whether
  //                          it should be counted
  // returns: results --> object with keys that are items which are being counted,
  //                      and the number of occurences in allItems as the value
  
  const results = {};

  // iterate through allItems
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;

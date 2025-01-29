// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

"use strict";
function flattenArray(arr) {
  return arr.flat(Infinity);
}

const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);

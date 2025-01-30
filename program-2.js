// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

"use strict";
function flattenArray(arr) {
  return arr.flat(Infinity);
}

function mostFrequentItem(arr) {
  let count = {};
  let maxCount = 0;
  let mostFrequent;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      mostFrequent = item;
    }
  }
  console.log(mostFrequent, `"${maxCount} times"`);
}

let arr1 = [1, 2, [3, 4], [5, [6, 7]]];
let arr2 = [1, {id:2,id:5}, [3, 4], [3, 4], [5, [6, [7,[8,[9,[10]]]]]]];

console.log(flattenArray(arr1));
mostFrequentItem(flattenArray(arr1));

console.log(flattenArray(arr2));
mostFrequentItem(flattenArray(arr2));
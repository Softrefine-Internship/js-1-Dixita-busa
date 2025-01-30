// Write a JavaScript program to clone an array.

"use strict";
function clonedArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
  }
  return result;
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

let arr1 = [1, 2, 3];
let arr2 = [1, 2, [3, 4], { id: 1 }, { id: 2 }, { id: 1 }, 2, 2, [3, 4], [3, 4]];

console.log("Cloned Array:", clonedArray(arr1));
console.log("Cloned Array:", clonedArray(arr2));

mostFrequentItem(arr1);
mostFrequentItem(arr2);


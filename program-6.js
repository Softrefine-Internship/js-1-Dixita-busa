// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

"use strict";
const removeDuplicteArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
};

function mergeRemoveDuplicteArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  removeDuplicteArray(arr1);
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

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7, 7];
mergeRemoveDuplicteArray(arr1, arr2);
mostFrequentItem(arr2);
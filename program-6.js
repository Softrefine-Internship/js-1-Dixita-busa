// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

"use strict";
const removeDuplicteArray = function (arr) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        arr1.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr1);
};

function mergeRemoveDuplicteArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  removeDuplicteArray(arr1);
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
mergeRemoveDuplicteArray(arr1, arr2);
// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

"use strict";
function unionOfArrays(arr1, arr2) {
  let mergeArray = [...arr1, ...arr2];
  let uniqueArray = [...new Set(mergeArray)];

  return uniqueArray.sort((a, b) => a - b);
}

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const result = unionOfArrays(arr1, arr2);
console.log(result);
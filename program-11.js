// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

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
  return arr;
};

function uniqueArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  removeDuplicteArray(arr1);
  return arr1;
}

const sortedArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
};

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

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10, 1];

sortedArray(uniqueArray(arr1, arr2));
console.log(uniqueArray(arr1, arr2));
mostFrequentItem(arr2);
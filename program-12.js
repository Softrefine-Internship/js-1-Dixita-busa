// Write a JavaScript function to find the arrayDifferenceerence between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

"use strict";

const arrayDifference = function (arr1, arr2) {
  const resultArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !resultArray.includes(arr1[i])) {
      resultArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !resultArray.includes(arr2[i])) {
      resultArray.push(arr2[i]);
    }
  }

  for (let i = 1; i < resultArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (resultArray[j] > resultArray[i]) {
        let temp = resultArray[j];
        resultArray[j] = resultArray[i];
        resultArray[i] = temp;
      }
    }
  }
  return resultArray;
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
console.log(arrayDifference(arr1, arr2)); 
mostFrequentItem(arr2);
// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

"use strict";
function mostFrequentItem(arr) {
  let count = {};
  let maxCount = 0;
  let mostFrequent;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      mostFrequent = [item];
    } else if (count[item] === maxCount) {
      mostFrequent.push(item);
    }
  }

  mostFrequent.forEach(item => {
    console.log(item, `"${maxCount} times"`);
  });
}

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
mostFrequentItem(arr1);
const arr2 = [3, "a", "a", "a", 2, 2, 2, 2, 3, "a", 3, "a", 2, 4, 9, 3];
mostFrequentItem(arr2);

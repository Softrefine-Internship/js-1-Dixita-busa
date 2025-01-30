// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

"use strict";
function isEqual(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!isEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

function removeDuplicates(arr) {
  const expectedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isRepeat = false;
    for (let j = 0; j < expectedArray.length; j++) {
      if (isEqual(expectedArray[j], arr[i])) {
        isRepeat = true;
        break;
      }
    }
    if (!isRepeat) {
      expectedArray.push(arr[i]);
    }
  }
  return expectedArray;
}

function mostFrequentItem(arr) {
  let count = {};
  let maxCount = 0;
  let mostFrequent;
  for (let item of arr) {
    let key = JSON.stringify(item);
    count[key] = (count[key] || 0) + 1;
    if (count[key] > maxCount) {
      maxCount = count[key];
      mostFrequent = item;
    }
  }
  console.log(mostFrequent, `(${maxCount} times)`);
}

const arr = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);
mostFrequentItem(arr);

const arr2 = [
  { id: 1, num: [1, 2, 3] },
  { id: 1, num: [1, 2, 3] },
  { id: 2, num: [1, 2, 3, 4] },
];
const uniqueArr2 = removeDuplicates(arr2);
console.log(uniqueArr2);
mostFrequentItem(arr2);

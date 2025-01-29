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
function removeDuplicates(arr) {
  const expectedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isRepeat = false;

    for (let j = 0; j < expectedArray.length; j++) {
      if (expectedArray[j].title === arr[i].title && expectedArray[j].author === arr[i].author) {
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

const arr = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

console.log(removeDuplicates(arr));
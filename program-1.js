// Write a JavaScript program to clone an array.

"use strict";
let originalArray = [1, 2, 3];
let clonedArray = [];

for (let i = 0; i < originalArray.length; i++) {
  clonedArray.push(originalArray[i]);
}

console.log(clonedArray);
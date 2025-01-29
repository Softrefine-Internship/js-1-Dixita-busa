/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

"use strict";
function adjacentFlowers(flowerbed, n) {
  let plant = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      plant++;
    }
    if (plant >= n) return true;
  }

  return false;
}

const flowerbed1 = [1, 0, 0, 0, 1];
console.log(adjacentFlowers(flowerbed1, 1));

const flowerbed2 = [1, 0, 0, 0, 1];
console.log(adjacentFlowers(flowerbed2, 2));
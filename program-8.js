// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

"use strict";
function insertsDashes(input) {
    let num = input[0]; 
  
    for (let i = 1; i < input.length; i++) {
      if (input[i] % 2 === 0 && input[i - 1] % 2 === 0) {
        num += "-";
      }
      num += input[i];
    }
  
    return num;
  }
  
  const input = "025468";
  console.log(insertsDashes(input)); 
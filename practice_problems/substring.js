/*

Part 1: making a function version of the deprecated String.prototype.substr method

Problem:
-take a string, start index, and desired length of substring
-return the substring starting at the start index and going up to max length
-return what we have if the max length is longer than remaining chars in string
-accept negative start index, counting from end of string backwards to determine start
-if length is <= 0, return ''
 
Data:
-3 arguments, a string and 2 numbers (integers)

Algorithm:
1. find the start--if negative, reassign start to string.length + start
2. declare and initialize substring to ''
3. delcare and initialize a counter to 0
4. loop with index through string with index initialized to start
  -(break when counter >= length arg)
  -break if char is not found (undefined)
  -add char to substring
5. return substring

*/

// function substr(string, start, length) {
//   if (start < 0) {
//     start = string.length + start;
//   }

//   let substring = '';
//   let counter = 0;
//   for (let index = start; counter < length; index++) {
//     if (string[index] === undefined) break;
//     substring += string[index];
//     counter += 1;
//   }

//   return substring;
// }

// LS Solution is a little more legible,
// assigns index in the loop rather than incrementing two variables:

// function substr(string, start, length) {
//   if (start < 0) {
//     start = string.length + start;
//   }

//   let newString = '';
//   for (let counter = 0; counter < length; counter += 1) {
//     let index = start + counter;

//     if (string[index] === undefined) {
//       break;
//     }

//     newString += string[index];
//   }

//   return newString;
// }

// let string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""

/*

Part 2: making a function of the String.prototype.substring method

Problem: given a string and a start and end index, return a substring
-end index is not inclusive
-swap values of start and end if end is smaller
-if start === end, return ''
-if end is ommitted or larger than string, return through end of the string
-if start or end is < 0 or NaN, treat as 0

Data:
-given a string, and what should be two positive integers
-must be able to handle missing end argument
-must be able to handle string or negative number or NaN instead of positive integer args

Basic Algorithm:
0. adjust start and end values according to rules above
1. loop through string starting at start, building substring result as we go
  -end once index >= end
2. return substring

*/

function substring(string, start, end) {
  if (isNaN(start) || start < 0) {
    start = 0;
  } else if (start > string.length) {
    start = string.length;
  }

  if (end > string.length || end === undefined) {
    end = string.length;
  } else if (isNaN(end) || end < 0) {
    end = 0;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let newString = '';
  for (let index = start; index < end; index++) {
    newString += string[index];
  }

  return newString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"

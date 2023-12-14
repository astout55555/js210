/*

Problem:
-return string repeated n times
-return undefined if given a non-number or number < 0

Algorithm:
1. if times is not a number or is <0, return undefined
2. declare and initialize result string to ''
3. loop from 1 to times, adding string to result string each time
4. return result string

*/

function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) {
    return undefined;
  }

  let result = '';
  for (let count = 1; count <= times; count++) {
    result += string;
  }
  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

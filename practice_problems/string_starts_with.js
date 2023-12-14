/*

Problem:
-check if a string begins with another string, returning true or false
-if entire string is contained in string 2, should still return false
  -(i.e. string1 must begin with string2, not the reverse)
-return true if string2 is an empty string

Data:
-given 2 strings, immutable/primitive values
-returning booleans

Algorithm:
1. iterate through each character of string2 using its index
2. for each char, compare with char at same index of original string
  3. if a match is not found return false
4. return true (if no return yet)

*/

function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index++) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false

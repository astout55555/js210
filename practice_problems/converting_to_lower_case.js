/*

Problem: convert a string's uppercase letters to lowercase and return new string
-do not use String methods other than length (and okay to use [] operator)
-do not alter the lowercase letters of the string
-do not alter non-letter characters (must at least handle numeric chars)

Data: passed a string of upper and/or lower case letters and/or numeric chars
-return: a string of lower case chars and/or numeric chars

Algorithm:
1. declare result string initialized to ''
2. with loop and index iterate through each string char
  3. if char ASCII value is between 65-90 (uppercase letter)
    add 32, then find ASCII value at that code, then add to result
  4. otherwise, simply add to result as-is
5. return result string

*/

const CAPITAL_A_CODE = 65;
const CAPITAL_Z_CODE = 90;
const ASCII_DIFFERENCE_TO_LOWER_CASE = 32;

function isUpperCase(character) {
  if (character.charCodeAt() < CAPITAL_A_CODE) {
    return false;
  } else if (character.charCodeAt() >  CAPITAL_Z_CODE) {
    return false;
  } else {
    return true;
  }
}

function toLowerCase(string) {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (isUpperCase(string[index])) {
      let newASCII = string[index].charCodeAt() + ASCII_DIFFERENCE_TO_LOWER_CASE;
      newString += String.fromCharCode(newASCII);
    } else {
      newString += string[index]
    }
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

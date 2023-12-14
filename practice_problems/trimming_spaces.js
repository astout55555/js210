/*

Problem:
-take string, return string with spaces removed from ends only
-may only use [] and .length, no other String methods

Data:
-takes a string, a primitive value in JavaScript
-returns a new string

High Level Algorithm:
1. loop through index of string characters, pushing into an array
2. on loop, remove first character from array until a non-space is found or array empty
3. on loop, remove last character from array until a non-space is found or array empty
4. join array and return string

*/

function trim(string) {
  let characters = [];
  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    characters.push(character);
  }

  while (characters[0] === ' ') {
    characters.shift();
  }

  while (characters[characters.length - 1] === ' ') {
    characters.pop();
  }

  if (characters.length === 0) {
    return '';
  } else {
    return characters.join('');
  }
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""

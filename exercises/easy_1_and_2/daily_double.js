/*

Problem: take a string arg, collapse into new string with no repeated chars
-there can still be letters used more than once, just not in a row

Data: strings (primitive values)

Algorithm:
1. build up an array of all characters for the return string, declare/initialize to []
2. loop through index of string arg chars
  3. for each one, push to results array unless it matches the last element of the array
4. return joined results array

*/

// function crunch(string) {
//   let resultChars = [];

//   for (let index = 0; index < string.length; index++) {
//     if (string[index] === resultChars[resultChars.length - 1]) {
//       continue;
//     } else {
//       resultChars.push(string[index]);
//     }
//   }

//   return resultChars.join('');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// LS solution doesn't use arrays, simply checks based on the index in the loop

// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

// Further Exploration: solve using a regular expression

// solution from fellow student Christopher Perkins:
// uses capture group with a backreference (and the global flag).
// replaces all duplicates with the single character. could also use replaceAll()
const crunch = (string) => string.replace(/(.)\1+/g, '$1');

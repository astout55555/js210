/*

Problem:
-function must split string at every chosen delimiter found in it
-do not include delimiter in new strings
-log each split string to the console
-display an error message if delimiter not provided
-with an empty string delimiter, return each character as a split string
-if delimiter is not found, return the full string

Data:
-assume we are given two strings

Algorithm:
1. display error message if no delimiter provided
2. declare substring initialized to ''
3. loop through string indices
  4. if dlimiter is '' print char and continue
  4. if char does not match delimiter, add to substring
  5. if char matches delimiter, print substring and reassign to ''
6. print substring unless length is 0

*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substring = '';
  for (let index = 0; index < string.length; index++) {
    if (delimiter === '') {
      console.log(string[index]);
      continue;
    } else if (delimiter !== string[index]) {
      substring += string[index];
    } else if (delimiter === string[index]) {
      console.log(substring);
      substring = '';
    }
  }

  if (substring.length > 0) {
    console.log(substring);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
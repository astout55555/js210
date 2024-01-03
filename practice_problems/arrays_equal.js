// original practice problem:

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

// Array Exercise #10: Array Comparison

/*

Problem: reimplement the above so that the function returns true regardless of order
-they must also have the same number of each of the elements witht the same value

Examples:
-`sort()` and `toSorted()` don't change the order of '1' and 1
    causes last test to fail if I simply sort before comparisons

Data:
-objects (arrays); elements in examples are either strings or numbers
-strings can be numeric strings

Algorithm:
1. first confirm arrays are the same length, else return false
2. declare variables to store filtered parts of arrays--strings and numbers
3. sort the string and number arrays
4. for each of these sorted sub-arrays, compare using the prior function which checks order
5. return true unless anything so far has returned false

*/

function areArraysEqual(array1, array2) {
  let array1Strings = array1.filter( element => typeof(element) === 'string');
  array1Strings.sort();

  let array1OtherTypes = array1.filter( element => typeof(element) !== 'string');
  array1OtherTypes.sort();

  let array2Strings = array2.filter( element => typeof(element) === 'string');
  array2Strings.sort();

  let array2OtherTypes = array2.filter( element => typeof(element) === 'number');
  array2OtherTypes.sort();

  return (arraysEqual(array1Strings, array2Strings) && arraysEqual(array1OtherTypes, array2OtherTypes));
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
console.log(areArraysEqual([2, undefined], [undefined, 2]));        // true
console.log(areArraysEqual([2, undefined], [2]));                   // false
console.log(areArraysEqual(['null'], [null]));                      // false

// problem with my original solution:
// doesn't work if there are types other than strings and numbers, e.g. undefined.
// fixed problem by diving array into Strings and any other types.
// based on how sort() operates, the only issue is comparing strings with non-strings.
// comparing strings with strings, and everything else with everything else works!

// LS Solution:

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let index = array2Copy.indexOf(array1[i]); // finds index of first matching element
    if (index >= 0) { // if index is -1 then no match was found
      array2Copy.splice(index, 1); // uses splice to delete the element from copied array
    } else {
      return false;
    }
  }

  return true;
}

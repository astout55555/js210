/*

Problem: reverse a string or array, returning a new string or array
-empty array returns empty array
-string with 1 character returns that character
-does not mutate the argument

Data: strings are immutable, arrays are mutable (but shouldn't be mutated)

Algorithm:

-if array:
  1. initialize results variable to []
  2. iterate through array backwards, appending each value to results

-if string:
  1. initialize results variable to ''
  2. iterate through string, prepending each value to results

3. return results

*/

// my working solution, but a bit dense:
function reverse(inputForReversal) {
  let results;
  if (Array.isArray(inputForReversal)) {
    results = [];
    for (let index = inputForReversal.length - 1; index >= 0; index--) {
      results.push(inputForReversal[index]);
    }
  } else {
    results = '';
    for (let index = 0; index < inputForReversal.length; index++) {
      results = inputForReversal[index] + results;
    }
  }

  return results;
}

// // bug hunt:
// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// } // no problems so far, making good use of helper methods

// function reverseArray(inputForReversal) {
//   const reversed = [];
//   const length = inputForReversal.length;

//   for (let i = 0; i < length; i += 1) {
//     reversed[length - i] = inputForReversal[i]; // should be `reversed[length - i - 1]`
//   }

//   return reversed;
// }

// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split(' '); // separator should be an empty string to split up each character
//   return reverseArray(stringArray).join(' '); // join string should be empty to avoid inserting spaces
// }

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]

/*

Problem: create functions for shift and unshift to mimic the array methods

Shift:
-removes the first element from array (mutates array)
-returns the removed element (which could be a subarray/object)
-returns undefined if array is empty

Data: array objects, which can contain other objects, can and must be mutated

Algorithm:
1. return undefined if array is empty
2. reverse, pop the last element and store in variable, then reverse again
3. return removed variable

Unshift:
-takes 2 or more args, 1 array, 1 or more values to prepend
-returns the new length of the array
-if given the array but no additional arguments, does not mutate the array
-does not flatten the arrays if an array is given as an arg to prepend

Data: array, but also primitive values could be args for prepending

Algorithm 1:
1. iterate through input array backwards
  -reassign each index position + length to the value at that index
2. iterate through rest args array
  -assign values to index positions of input array (prepending)
3. return the new length

Algorithm 2:
1. reverse array
2. iterate through rest args backwards, appending to array
3. reverse array and return new length

*/

function shift(array) {
  if (array.length === 0) {
    return undefined;
  }

  array.reverse();
  let removedElement = array.pop();
  array.reverse();

  return removedElement;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

function unshift(array, ...args) {
  array.reverse();
  for (let index = args.length - 1; index >= 0; index--) {
    array.push(args[index]);
  }

  array.reverse();
  return array.length;
}

// // solution that doesn't use reverse() to cheese it:
// function unshift(array, ...args) {
//   for (let index = array.length - 1; index >= 0; index--) {
//     array[index + args.length] = array[index];
//   }

//   for (let index = 0; index < args.length; index++) {
//     array[index] = args[index];
//   }

//   return array.length;
// }

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

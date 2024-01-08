/*

Problem:
-take an array argument, return 1 array with 2 sub-arrays, each with half of the elements
-the first array should take the middle element if number of elements is odd

Algorithm:
1. init empty 1st and 2nd halves arrays
2. iterate through input array
  if index is less than half of input array length, push to 1st half
  else push to 2nd half
3. return array with both half arrays in it

*/

function halvsies(array) {
  let firstHalf = [];
  let secondHalf = [];

  for (let index = 0; index < array.length; index++) {
    if (index < array.length / 2) {
      firstHalf.push(array[index]);
    } else {
      secondHalf.push(array[index]);
    }
  }

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// LS Solution:

function halvsies(array) {
  const half = Math.ceil(array.length / 2); // rounding up includes the last index position
  const firstHalf = array.slice(0, half); // this allows us to use slice, more concise
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

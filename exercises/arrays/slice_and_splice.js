/*

Problem: implement functions mimicing array slice() and splice() methods

slice(array, beginningIndex, endIndex)
-returns new array starting from beginning, up to but not including endIndex
-does not mutate the array

Data: takes 1 array object and 2 integer args (numbers, primitive values)

Algorithm:
1. declare results array
2. if end is bigger than array length, reassign to length
3. iterate through array from beginning to end index, pushing values to results array
4. return results

splice()
-removes (mutates array) elements and returns new array of those removed elements
-if extra arguments provided, these are inserted at the start index after any elements removed
-insertion and removal are independent of each other

Data:
-start and deleteCount will always be integers greater than 0

Algorithm:
1. if start is greater than length, set equal to length
2. if deleteCount is greater than difference of length and start, set to difference
2.5. store a slice of the chunk to be removed in a variable
3. declare a variable to hold values before mutating array at the end, set empty
4. fill it with a slice of the input array up until the start index
5. then add the optional args (input values)
6. then add everything from the end index to the end of the input array
7. clear the input array
8. iterate through stored values, rebuilding input array
9. return the stored removed chunk

*/

function slice(array, begin, end) {
  let arrayChunk = [];
  if (end > array.length) {
    end = array.length;
  }
// because I don't also check for a valid `begin` argument, I could get an invalid result.
// e.g. as long as `begin < end` I would push `undefined` values into `arrayChunk`
  for (let index = begin; index < end; index++) {
    arrayChunk.push(array[index]);
  }

  return arrayChunk;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  let removedChunk = array.slice(start, (start + deleteCount));

  let arrayRebuilder = [];

  for (let index = 0; index < start; index++) {
    arrayRebuilder.push(array[index]);
  }

  for (let index = 0; index < args.length; index++) {
    arrayRebuilder.push(args[index]);
  }

  for (let index = start + deleteCount; index < array.length; index++) {
    arrayRebuilder.push(array[index]);
  }

  array.length = 0;
  for (let index = 0; index < arrayRebuilder.length; index++) {
    array[index] = arrayRebuilder[index];
  }

  return removedChunk;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

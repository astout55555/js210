// my working pop solution:

function pop(array) {
  if (array.length === 0) {
    return undefined;
  }

  let lastElement = array[array.length -1];
  array.length -= 1;
  return lastElement;
}

// // bug hunt:
// function pop(array) {
//   const poppedElement = array[array.length]; // bug - array[array.length] is undefined
//   array.splice[array.length]; // bug - array.splice[array.length] will remove nothing...
//   // ...both because it should be () not [], but also because it must be `length - 1`
//   return poppedElement;
// }

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// my working push solution:

function push(array, ...newElements) {
  for (let element of newElements) {
    array[array.length] = element;
  }

  return array.length;
}

// // bug hunt:
// function push(array, ...args) {
//   const length = args.length; // not a bug, but imo a variable named length is a bad idea

//   // i should be initialized to 0, not 1
//   for (let i = 1; i < length; i += 1) {
//     array[i] = args[i]; // should not be assigning values to array[i]...
//   } // ...change it to array[array.length].

//   return array.length;
// }

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0

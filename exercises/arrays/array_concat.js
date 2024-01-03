/*

Problem: implement my own Array.prototype.concat method by writing a function
-must return a new array composed of all values from first array and 2nd array/arg
  The first argument will always be an array.
  The second argument can be either an array or another value.
  The function should return a new array.
  The elements in the new array should be in the same order as they appear in the arguments.
  The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
  The function should copy the values of primitives (e.g., strings, numbers, and booleans).

Algorithm:
1. declare/initialize a results array variable
2. iterate through first array and push values to results array
3. if 2nd arg is an array, do the same to it (to keep array flat)
  otherwise, just push it (works for objects and primitives)

Part 2:

Problem: extend functionality to allow for more than 2 arrays or values

Algorithm:
-same as before except:
1. iterate over arguments object (args kept in array)
2. for each, perform step 3 above

*/

// Part 1 solution:

// function concat(array1, secondArgument) {
//   let resultsArray = [];

//   for (let element of array1) {
//     resultsArray.push(element);
//   }

//   if (Array.isArray(secondArgument)) {
//     for (let element of secondArgument) {
//       resultsArray.push(element);
//     }  
//   } else {
//     resultsArray.push(secondArgument);
//   }

//   return resultsArray;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }

// Part 2 solution:

function concat(...args) {
  let resultsArray = [];

  for (let index = 0; index < args.length; index++) {
    if (Array.isArray(args[index])) {
      for (let element of args[index]) {
        resultsArray.push(element);
      }
    } else {
      resultsArray.push(args[index]);
    }
  }

  return resultsArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

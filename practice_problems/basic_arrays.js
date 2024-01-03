function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // undefined
// console.log(nthElementOf(digits, -1));  // undefined

// #5:

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// My solution for #6:

// function lastNOf(arr, count) {
//   let startIndex = arr.length - count;
//   return arr.slice(startIndex, arr.length);
// }

// LS Solution for #6:

// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// } // if you don't provide an end index, #slice returns through the end of the array

// #7: make it work with a count greater than the array length:

function lastNOf(arr, count) {
  let startIndex;
  if (arr.length - count < 0) {
    startIndex = 0;
  } else {
    startIndex = arr.length - count;
  }

  return arr.slice(startIndex);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 10));    // returns [4, 8, 15, 16, 23, 42]

// #8, my solution:

function endsOf(beginningArr, endingArr) {
  let newArray = [];
  newArray.push(beginningArr[0]);
  newArray.push(endingArr[endingArr.length -1]);

  return newArray;
}

// LS Solution, using an array literal is more concise here:

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

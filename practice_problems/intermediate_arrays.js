function oddElementsOf(arr) {
  let odds = [];
  for (let index = 1; index < arr.length; index += 2) {
    odds.push(arr[index]);
  }

  return odds;
}

// let digits = [4, 8, 15, 16, 23, 42];

// oddElementsOf(digits);    // returns [8, 16, 42]

// #2: For this problem I updated my node version in order to use `toReversed()`,
// which returns a reversed shallow copy of the array like `slice().reverse()` would.

// old code, similar to LS solution:
// function concatWithReversed(array) {
//   let reversedArray = array.slice().reverse(); // reverse() mutates the shallow copy
//   return array.concat(reversedArray);
// }

function concatWithReversed(array) {
  return array.concat(array.toReversed());
}

// concatWithReversed(digits); // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

// #3:

function sortDescending(arr) {
  return arr.toSorted( (a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let arrayOfSums = [];
  for (let subArray of arr) {
    let sum = subArray.reduce( (accumulator, number) => {
      return accumulator + number}, 0);
    arrayOfSums.push(sum);
  }

  return arrayOfSums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function uniqueElements(arr) {
  let uniquesArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (uniquesArray.includes(arr[index])) {
      continue;
    } else {
      uniquesArray.push(arr[index]);
    }
  }

  return uniquesArray;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

// using a while loop for some reason idk
function missing(sortedArray) {
  let missingNumbers = [];

  let number = sortedArray[0];
  while (number < sortedArray[sortedArray.length - 1]) {
    number += 1;
    if (sortedArray.includes(number)) {
      continue;
    } else {
      missingNumbers.push(number);
    }
  }

  console.log(missingNumbers);
}

// LS solution using a for loop and generally clearer code, but I don't like indexOf() here:

function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];

  for (let integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) { // I think !includes() is more clear
      result.push(integer);
    }
  }

  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []

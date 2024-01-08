function getSelectedColumns(numbers, cols) {
  var result = [];

  // in each loop we set the value of variable `length`, which means
  // `length` is reassigned in the inner loop, causing the outer loop
  // to end after one round because 1(i) < 1(length) is false.
  // because we're using var, the inner variable is not confined to the inner block scope.
  // I'll fix this by renaming the variables, but we could also use `let` instead.
  for (var i = 0, outerLength = numbers.length; i < outerLength; i += 1) {
    for (var j = 0, innerLength = cols.length; j < innerLength; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

function sequence(positiveInteger) {
  let countArray = [];

  for (let count = 1; count <= positiveInteger; count++) {
    countArray.push(count);
  }

  return countArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

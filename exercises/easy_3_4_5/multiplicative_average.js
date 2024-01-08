function showMultiplicativeAverage(arrayOfIntegers) {
  let product = arrayOfIntegers.reduce( (accumulator, integer) => {
    return accumulator * integer;
  }, 1);

  let average = product / arrayOfIntegers.length;
  let leftOfDecimalDigits = Math.floor(average).toString().length;
  let precision = leftOfDecimalDigits + 3;

  return average.toPrecision(precision);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// LS Solution uses toFixed(), which is much easier than using toPrecision():

function showMultiplicativeAverage(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i += 1) {
    product *= numbers[i];
  }

  return (product / numbers.length).toFixed(3); // argument is precision to the right of decimal
}

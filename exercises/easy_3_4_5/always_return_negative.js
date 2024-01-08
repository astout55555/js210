/*

Problem: take a number and return the negative version of that number
-preserve negatives (don't negate them and return positives)
-extends to -0

*/

function negative(number) {
  return Math.abs(number) * -1;
}

// FE: use ternary operator

function negative(number) {
  return (number < 0) ? number : -number;
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

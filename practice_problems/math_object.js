// #1

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

// #2

let anInteger = -180;
console.log(Math.abs(anInteger));

// #3

console.log(Math.sqrt(16777216));

// #4

console.log(Math.pow(16, 6));

// #5

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// #6

function randomBetween(min, max) {
  if (min > max) {
    let temp = min; // or more concise: `[min, max] = [max, min]`
    min = max;
    max = temp;
  }

  let rangeSize = max - min + 1; // number of possible results, inclusive

  return min + Math.floor((Math.random() * rangeSize));
}

console.log(randomBetween(3, 6));
console.log(randomBetween(5, 2));
console.log(randomBetween(7, 7));

// my initial solution:
// const DEGREE_SYMBOL = String.fromCharCode(176);
// const SECONDS_PER_DEGREE = 60 * 60;

// function formatTo00(number) {
//   if (number < 10) {
//     return `0${Math.round(number)}`;
//   } else {
//     return `${Math.round(number)}`;
//   }
// }

// function dms(degreesFloat) {
//   let integerDegrees = Math.floor(degreesFloat);
//   let decimalDegrees = degreesFloat - integerDegrees;

//   let seconds = decimalDegrees * SECONDS_PER_DEGREE;
//   let minutes = Math.floor(seconds / 60);
//   seconds -= minutes * 60;

//   let formattedMinutes = formatTo00(minutes);
//   let formattedSeconds = formatTo00(seconds);

//   return `${integerDegrees}${DEGREE_SYMBOL}${formattedMinutes}'${formattedSeconds}"`;
// }

// LS Solution:

// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// function dms(degreesFloat) {
//   const degreesInt = Math.floor(degreesFloat);
//   const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   const seconds = Math.floor(
//     (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
//     SECONDS_PER_DEGREE
//   );

//   return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
// }

// function padZeroes(number) {
//   const numString = String(number);
//   return numString.length < 2 ? (`0${numString}`) : numString;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

// FE: make it work with positive or negative inputs, returning a valid result still

/*
Algorithm:
1. add 360 to input until result is positive
*/

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(number) {
  const degreesFloat = convertToDegrees(number);
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function convertToDegrees(number) {
  while (number < 0) {
    number += 360;
  }

  return number;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"

// check to make sure it still works with old examples:
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

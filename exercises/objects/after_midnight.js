// original implemenation:

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

/*

Problem: reimplement the above function using the Date object
-take the number of minutes before (negative) or after (positive) midnight
-return string representation of the time formatted '24:00'

Data:
-takes a number argument, returns a string
-must work with the Date object in between

Algorithm:
1. create a Date object set to midnight tonight
2. get the time of that Date object
3. find the change in miliseconds given the minutes argument
4. use setTime() to find the changed time value
5. find the hours and minutes of the modified date object
6. use the padWithZeroes() function to format

*/

// my solution:
function timeOfDay(deltaMinutes) {
  let dateObject = new Date(2024, 0, 5, 24);
  let midnightTime = dateObject.getTime();
  let deltaMiliseconds = deltaMinutes * 60 * 1000;

  dateObject.setTime(midnightTime + deltaMiliseconds);
  let hours = dateObject.getHours();
  let minutes = dateObject.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

// LS solution:
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

// Examples:

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"

// Part 2

// original functions, to be refactored using the Date object:

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

/*

Problem: refactor the 2 reverse functions that take a time string '00:00',
  and return the minutes after or before midnight, respectively.

Data:
  -given a string formatted '00:00'
  -return a number (in minutes)
  -works with the Date object in between

Algorithm:
0. create constant representing time value of midnight start of year 2000

afterMidnight():
1. Date.parse('2000T[insert time string here]')
2. otherwise, find difference between times and convert to minutes
3. return minutes

beforeMidnight():
1. Date.parse with string input
2. if it's equal to constant, return 0
3. otherwise, find difference between time parsed with 24:00 and string input
4. return in minutes

*/

const TIME_AT_NEW_MILLENIUM = Date.parse('2000T00:00');
const ONE_DAY_INTO_NEW_MILLENIUM = Date.parse('2000T24:00');

function afterMidnight(timeString) {
  if (timeString === '00:00') {
    return 0;
  }

  let deltaMiliseconds = Date.parse(`2000T${timeString}`) - TIME_AT_NEW_MILLENIUM;
  return deltaMiliseconds / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeString) {
  if (timeString === '00:00') {
    return 0;
  }

  let deltaMiliseconds = ONE_DAY_INTO_NEW_MILLENIUM - Date.parse(`2000T${timeString}`);
  return deltaMiliseconds / MILLISECONDS_PER_MINUTE;
}

// LS Solution is truer to the exercise,
// refactors existing solutions while changing less of it:

// repeat constants:
// const MILLISECONDS_PER_MINUTE = 60000;
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

// unchanged:
function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// Examples:

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686

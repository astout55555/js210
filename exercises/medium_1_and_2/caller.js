// Example of the doubler function:
// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

// my solution for making a doubler function with a preset caller:
function makeDoubler(callerName) {
  let doubler = function (number) {
    console.log(`This function was called by ${callerName}.`);
    return number + number;
  }

  return doubler;
}

// Example:

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.

const rlSync = require('readline-sync');

let firstNumber = rlSync.question('Enter the 1st number: ');
let secondNumber = rlSync.question('Enter the 2nd number: ');
let thirdNumber = rlSync.question('Enter the 3rd number: ');
let fourthNumber = rlSync.question('Enter the 4th number: ');
let fifthNumber = rlSync.question('Enter the 5th number: ');

let numbersToSearch = [
  firstNumber, secondNumber, thirdNumber,
  fourthNumber, fifthNumber,
]

// LS solution is tighter for the above code:
// const numbers = [];

// numbers.push(prompt('Enter the 1st number:'));
// ...etc.

let searchNumber = rlSync.question('Enter the last number: ');

if (numbersToSearch.includes(searchNumber)) {
  console.log(`The number ${searchNumber} appears in [${numbersToSearch.join(', ')}].`);
} else {
  console.log(`The number ${searchNumber} does not appear in [${numbersToSearch.join(', ')}].`);  
}

// FE:



let threshold = rlSync.question('Enter a one last, last number: ');
function conditionalCBFunction(number) {
  return number > threshold;
}

if (numbersToSearch.some(conditionalCBFunction)) {
  console.log(`A number in [${numbersToSearch.join(', ')}] is greater than ${threshold}.`);
} else {
  console.log(`No number in [${numbersToSearch.join(', ')}] is greater than ${threshold}.`);
}

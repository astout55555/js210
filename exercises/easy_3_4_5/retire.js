const rlSync = require('readline-sync');

let currentAge = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');
let yearsToWork = retirementAge - currentAge;

let today = new Date(); // returns a Date object. `Date()` on its own returns a string.
let currentYear = today.getFullYear();
let retirementYear = currentYear + yearsToWork

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToWork} years of work to go!`);

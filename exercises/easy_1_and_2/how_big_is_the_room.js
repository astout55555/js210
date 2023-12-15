// further exploration solution:

const readlineSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let measurement;
while (true) {
  console.log('First, please choose which measurement to use ("meters" or "feet").');
  measurement = readlineSync.prompt();
  if (measurement === 'meters' || measurement === 'feet') {
    break;
  } else {
    console.log('Invalid response, please try again.');
  }
}

console.log('What is the length?');
let length = parseInt(readlineSync.prompt());

console.log('What is the width?');
let width = parseInt(readlineSync.prompt());

if (measurement === 'meters') {
  let squareMeters = length * width;
  let squareFeet = squareMeters * SQMETERS_TO_SQFEET;
  console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);
} else if (measurement === 'feet') {
  let squareFeet = length * width;
  let squareMeters = squareFeet / SQMETERS_TO_SQFEET;
  console.log(`The area of the room is ${squareFeet.toFixed(2)} square feet (${squareMeters.toFixed(2)} square meters).`);
}

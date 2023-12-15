# Conditionals Part 1

```javascript
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // 'Hello'
}

if (!myString) {
  console.log('World'); // does not run
}

if (!!myArray) {
  console.log('World'); // 'World'
}

if (myOtherString || myArray) {
  console.log('!'); // '!'
}
```

# Arithmetic Integer

```javascript
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
```

# Counting the Number of Characters

```javascript
// my solution, runs using node, refactored to ignore spaces:
const readLineSync = require('readline-sync');

console.log('Please enter a phrase: ');
let phrase = readLineSync.prompt();

let chars = phrase.split(' ').join('').length;
console.log(`There are ${chars} characters in ${phrase}.`);

// alternative original LS solution, for running in a browser:
const input = prompt('Please enter a phrase:');
const numberOfCharacters = String(input.length);
// `String(input)` is not needed, replace already returns a new string and it's clear that's what's happening because we use `const` to declare `input`. but using `String(input).replace` is slightly clearer, I guess.
console.log(`There are ${numberOfCharacters} characters in '${input}'.`);

// further, further exploration solved using browser code and String.replace()
const input = prompt('Please enter a phrase:');
let inputWithoutSpaces = input.replace(/ /g, '');
let alphabeticCharsOnly = input.replace(/[^a-z^A-Z]/g, '');
const numberOfCharacters = alphabeticCharsOnly.length;

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);
```

# Converting a String to a Number

```javascript
// my solution:
function stringToInteger(numeric_string) {
  let chars = numeric_string.split('');
  let reversedDigits = chars.map( (char) => {
    switch (char) {
      case '0':
        return 0;
        break;
      case '1':
        return 1;
        break;
      case '2':
        return 2;
        break;
      case '3':
        return 3;
        break;
      case '4':
        return 4;
        break;
      case '5':
        return 5;
        break;
      case '6':
        return 6;
        break;
      case '7':
        return 7;
        break;
      case '8':
        return 8;
        break;
      case '9':
        return 9;
        break;
    }
  }).reverse();

  let number = 0;
  for (let index = 0; index < reversedDigits.length; index++) {
    number += reversedDigits[index] * 10**index;
  }

  return number;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

// LS solution:
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
}; // a DIGITS constant object for lookup is a good idea

function stringToInteger(string) {
  let value = 0;
  const numbers = stringToNumbers(string);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  } // a way to calculate the value without having to reverse the digits

  return value;
}

function stringToNumbers(string) {
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }

  return result;
} // helper function makes the main function more concise
```

# Convert a String to a Signed Number

```javascript
// my solution:
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(fullString) {
  let value = 0;

  let sign = findSign(fullString);
  let numericString = fullString;
  if (sign) {
    numericString = fullString.slice(1);
  } // declare and initialize sign and numericString

  const numbers = stringToNumbers(numericString);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  if (sign === '-') {
    value *= -1;
  } // change value to negative if sign is negative

  return value;
}

function stringToNumbers(string) {
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }

  return result;
}

function findSign(string) {
  if (!Object.keys(DIGITS).includes(string[0])) {
    return string[0];
  } else {
    return null;
  }
} // new helper method to find the sign if any

// LS solution is simpler:
// old code excluded for brevity
function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}
// rather than change implementation of stringToInteger() and add a helper method, the LS solution instead uses the old functions as helper methods to the new one, which implements them slightly differently depending on the value of the first string character
```

# Convert a Number to a String

```javascript
// my solution:
// first, find the number of digits in the number
function findNumberOfDigits (integer) {
  let places = 1;
  let comparisonNumber = 10;
  while (comparisonNumber < integer) {
    comparisonNumber *= 10;
    places += 1;
  }
  
  return places;
}

// then, turn those digits into an array
function digitsFromInteger (integer) {
  let places = findNumberOfDigits(integer);
  let digits = [];
  for (let remainder = integer; places > 0; places--) {
    let digit = Math.floor(remainder / (10 ** (places - 1)));
    remainder -= (digit * (10 ** (places -1)));
    digits.push(digit);
  }
  return digits;
}

// then, use that array and a switch statement to return a numeric string
function integerToString (integer) {
  let digitsArray = digitsFromInteger(integer);
  let numericChars = digitsArray.map( (char) => {
    switch (char) {
      case 0:
        return '0';
        break;
      case 1:
        return '1';
        break;
      case 2:
        return '2';
        break;
      case 3:
        return '3';
        break;
      case 4:
        return '4';
        break;
      case 5:
        return '5';
        break;
      case 6:
        return '6';
        break;
      case 7:
        return '7';
        break;
      case 8:
        return '8';
        break;
      case 9:
        return '9';
        break;
    }
  });

  return numericChars.join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

// LS solution:

// uses a DIGITS array, mapping the string chars onto the array's index
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do { // uses % operator to find final digit
    let remainder = number % 10;
    number = Math.floor(number / 10);
    // modifies number every loop to remove final digit from number
    result = DIGITS[remainder] + result; // prepends the digit to the string
  } while (number > 0);

  return result;
}
```

# Convert a Signed Number to a String

```javascript
// my solution:
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';
  let sign = '';

  // I put the if statement logic here, inside the old function
  if (number > 0) {
    sign = '+';
  } else if (number < 0) {
    sign = '-';
    number *= -1;
  } else {
    return '0';
  }

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return sign + result; // prepend the sign to the result
}

console.log(integerToString(4321));   // "+4321"
console.log(integerToString(-123));   // "-123"
console.log(integerToString(0));      // "0"

// LS solution:
// like last time, does not modify previous function, but instead defines the new function with a conditional statement that makes use of the old function, implmenting it slightly differently for each situation
function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}

// further exploration, my solution builds off LS solution:
// use this old function:
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else if (isNegativeZero(number)) {
    return '-0';
  } else {
    return '0';
  }
}
```

/*

Algorithm:
1. split into characters
2. build new string with repeating characters
3. return new string

*/

function repeater(string) {
  let newString = '';
  string.split('').forEach( character => {
    newString += character + character;
  });

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// Part 2: Only double consonants

const CONSONANTS_ONLY_REGEX = /[b-df-hj-np-tv-z]/i

function doubleConsonants(string) {
  let newString = '';
  string.split('').forEach( character => {
    newString += character;
    if (character.match(CONSONANTS_ONLY_REGEX)) {
      newString += character;
    }
  });

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

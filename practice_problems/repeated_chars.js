/*

Problem: take a string, return an object that contains count of repeated characters
-character must appear 2 or more times, does not count singles

Data: given a string, returning an object
-keys are the letters that are repeated
-values are the count of how many of each of those letters appear in the string

High Level Algorithm:
0. create empty results object
1. find the count of each letter in the string (ignoring case)
  and create allCounts object from info
2. iterate through allCounts
  if count is 2+, create key/value pair in resultsObject
3. return results object


Algorithm for steps 1:
1. copy+downcase the string, then split word into characters, sort, and save to var
2. use for loop to iterate through index of char array
  if the letter is not yet a property of the allCounts object, add it with value 1
  else allCounts[letter] += 1

Algorithm for step 2:
  1. iterate over the allCounts object
    if value >= 2, results[letter] = allCounts[letter]

*/

// since I didn't know how to delete or filter object entries, I used 2 objects:
function repeatedCharacters(string) {
  let allCounts = {};
  let downcasedString = string.toLowerCase();

  for (let index = 0; index < downcasedString.length; index++) {
    if (!allCounts[downcasedString[index]]) {
      allCounts[downcasedString[index]] = 1;
    } else {
      allCounts[downcasedString[index]] += 1;
    }
  }

  let repeatCharacterCounts = {};
  for (let [letter, count] of Object.entries(allCounts)) {
    if (count >= 2) {
      repeatCharacterCounts[letter] = count;
    }
  }

  return repeatCharacterCounts;
}

// LS solution makes use of the "delete operator" for objects,
// only need to use 1 object this way:
function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();

  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key]; // `delete` is an operator, not a method
    } // have to remember I can use it, not on the Object page
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

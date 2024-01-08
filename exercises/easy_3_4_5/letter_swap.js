/*

Algorithm:
1. split string into words
2. init empty array
3. iterate through words
  for each word, break into chars, swap first and last letter, then rejoin
  push new word into new array
4. join and return new array of swapped words

*/

function swapFirstAndLastCharacters(word) {
  let characters = word.split('');

  let firstLetter = characters.shift();
  let lastLetter = characters.pop();
  characters.unshift(lastLetter);
  characters.push(firstLetter);

  return characters.join('');
}

function swap(string) {
  let words = string.split(' ');
  let swappedWords = words.map(swapFirstAndLastCharacters);

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

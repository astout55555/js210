// Part 1

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// Buggy LS version to debug:

// function reverseSentence(string) {
//   return string.split('').reverse.join(''); // `reverse` must be `reverse()` instead
// } // also, this splits and reverses every character--should reverse by word instead,
// // meaning split and join should use ' ' space separator, not an empty string ''

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// Part 2

/*

Problem: take string, return string with certain words reversed
-if word is 5 or more letters, reverse it
-keep word order the same

Algorithm:
1. split sentence into words
2. iterate through words array
  if word length >= 5, replace word in array with reversed word
3. rejoin and return sentence with modifications

*/

function reverseWords(sentence) {
  let words = sentence.split(' ');
  for (let index = 0; index < words.length; index++) {
    if (words[index].length >= 5) {
      words[index] = words[index].split('').reverse().join('');
    }
  }

  return words.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

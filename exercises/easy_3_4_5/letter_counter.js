// Part 1

// function wordSizes(sentence) {
//   if (sentence.trim() === '') {
//     return {};
//   }

//   let words = sentence.split(' ');
//   let wordLengthsAndCounts = {};

//   words.forEach( word => { 
//     // if (wordLengthsAndCounts[word.length]) {
//     //   wordLengthsAndCounts[word.length] += 1;
//     // } else {
//     //   wordLengthsAndCounts[word.length] = 1;
//     // }
//     // refactored:
//     wordLengthsAndCounts[word.length] = wordLengthsAndCounts[word.length] || 0;
//     wordLengthsAndCounts[word.length] += 1;
//   });

//   return wordLengthsAndCounts;
// }

// LS Solution:

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) { // works as a guard clause against strings without words
      continue;
    }

    count[wordSize] = count[wordSize] || 0; // a concise idiom for creating a key/value pair if needed
    count[wordSize] += 1;
  }

  return count;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// Part 2: do the same but without counting non-letters as part of words

/*

Algorithm for helper method to remove non-letter chars:
1. take a word as an arg
2. split word into chars
3. filter array of chars by finding match with letter-only regex
4. join back into string and return

*/

// this could be refactored into simply `return word.replace(/[^a-z]/gi, '').length`
function onlyLettersLength(word) {
  let onlyLetters = word.split('').filter( letter => letter.match(/[a-z]/i));
  return onlyLetters.length;
}

function wordSizes(sentence) {
  if (sentence.trim() === '') {
    return {};
  }

  let words = sentence.split(' ');
  let wordLengthsAndCounts = {};

  words.forEach( word => {
    let length = onlyLettersLength(word); // or `word.replace(/[^a-z]/gi, '').length`

    wordLengthsAndCounts[length] = wordLengthsAndCounts[length] || 0;
    wordLengthsAndCounts[length] += 1;
  });

  return wordLengthsAndCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}

// Repeat

function repeat(times, string) {
  let output = '';
  for (let count = 1; count <= times; count++) {
    output += string;
  }

  console.log(output);
}

repeat(3, 'ha'); // 'hahaha'

// Multiline String

let multiLine = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';

console.log(multiLine);

// Contains Character

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
if (byteSequence.match(/x/)) { // or use includes()
  console.log('x detected');
}

// Blank?

function isBlank(string) {
  return !string.match(/[^ ]/);
  // or `return string.trim().length === 0;`
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

// Capitalize Words

let string = 'launch school tech & talk';
let words = string.split(' ');

let capitalizedWords = [];
words.forEach( word => {
  let capitalizedWord = word[0].toUpperCase() + word.slice(1);
  capitalizedWords.push(capitalizedWord);
});

console.log(capitalizedWords.join(' '));

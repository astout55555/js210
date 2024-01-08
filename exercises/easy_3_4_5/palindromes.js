// Part 1: case-sensitive, all characters matter

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// Part 2: case-insensitive, only alphanumeric characters matter

/*

Algorithm:
1. downcase string, split by character
2. filter out non-alphanumeric chars from array, then join
3. compare original string to modified string reversed

*/

function isRealPalindrome(string) {
  let modifiedCharacters = string.toLowerCase().split('').filter( character => {
    return character.match(/[a-z0-9]/i);
  });

  let modifiedString = modifiedCharacters.join('');
  let reversedAndModifiedString = modifiedCharacters.reverse().join('');

  return modifiedString === reversedAndModifiedString;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// Palindromic Number

function isPalindromicNumber(number) {
  return number === Number(number.toString().split('').reverse().join(''));
  // or `return isPalindrome(String(number));`
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

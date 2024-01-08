// original code: returns undefined
// function penultimate(string) {
//   return string.split(' ')[-2];
// }

// my solution:
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

// LS solution using slice:
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
} // ending index arg excludes last element, but is not required given the `[0]` after

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

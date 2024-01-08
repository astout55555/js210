// fill in the blanks:
// function calculateBonus() {
//   return _________[1] ? _________[0] / 2 : 0;
// }

function calculateBonus() { // no parameters defined
  return arguments[1] ? arguments[0] / 2 : 0;
} // I needed to access the elements of the arguments (array-like) object

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

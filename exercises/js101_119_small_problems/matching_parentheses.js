function isBalanced(string) {
  let countLeftParentheses = 0;
  let countRightParentheses = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      countLeftParentheses += 1;
    } else if (string[index] === ')') {
      countRightParentheses += 1;
    }

    if (countRightParentheses > countLeftParentheses) {
      return false;
    }
  }

  return (countLeftParentheses === countRightParentheses);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

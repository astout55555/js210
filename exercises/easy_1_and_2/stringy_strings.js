function stringy(totalCharacters) {
  let outputString = '1';
  for (let index = 1; index < totalCharacters; index++) {
    if (outputString[index - 1] === '1') {
      outputString += '0';
    } else {
      outputString += '1';
    }
  }

  return outputString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

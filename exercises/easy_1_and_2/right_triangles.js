function repeatCharacter(character, times) {
  let resultString = '';
  for (let count = 0; count < times; count++) {
    resultString += character;
  }
  return resultString;
}

function triangle(height) {
  for (let row = 1; row <= height; row++) {
    let nSpaces = height - row;
    let rowSpaces = repeatCharacter(' ', nSpaces);
    let rowStars = repeatCharacter('*', row);
    console.log(rowSpaces + rowStars);
  }
}

triangle(5);

triangle(9);

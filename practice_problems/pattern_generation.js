// my solution, including further exploration:

function generatePattern(nStars) {
  let digitsToPrint = '';

  for (let currentDigit = 1; currentDigit <= nStars; currentDigit++) {
    digitsToPrint += String(currentDigit);

    let starsToPrint = '';
    let maxStars = nStars;
    if (nStars >= 10) { // only works for numbers 1-99
      maxStars = maxStars * 2 - 9; // minus 9 to undouble the first 9 digits
    } // I'd need to add another condition for numbers 100+

    while (starsToPrint.length + digitsToPrint.length < maxStars) {
      starsToPrint += '*';
    }

    console.log(digitsToPrint + starsToPrint);
  }
}

generatePattern(20);

// LS Solution:

function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber); // works for any integer
  }

  let width = lastRowString.length; // explicitly determines width, more readable

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let count = 1; count <= numberOfStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

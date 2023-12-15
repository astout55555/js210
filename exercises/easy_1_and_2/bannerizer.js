function logInBox(string) {
  let width = string.length + 4;

  let topAndBottomLines = '+';
  for (let column = 1; column <= width - 2; column++) {
    topAndBottomLines += '-';
  }
  topAndBottomLines += '+';

  let paddingLines = '|';
  for (let column = 1; column <= width - 2; column++) {
    paddingLines += ' ';
  }
  paddingLines += '|';

  let centerLine = `| ${string} |`;

  console.log(topAndBottomLines);
  console.log(paddingLines);
  console.log(centerLine);
  console.log(paddingLines);
  console.log(topAndBottomLines);
}

logInBox('To boldly go where no one has gone before.');

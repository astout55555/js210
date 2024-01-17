const CAPITAL_A_CODE = 65;
const CAPITAL_Z_CODE = 90;
const LOWERCASE_A_CODE = 97;
const LOWERCASE_Z_CODE = 122;

function isCapitalLetter(character) {
  let charCode = character.charCodeAt();
  return (charCode >= CAPITAL_A_CODE && charCode <= CAPITAL_Z_CODE);
}

function isLowerCaseLetter(character) {
  let charCode = character.charCodeAt();
  return (charCode >= LOWERCASE_A_CODE && charCode <= LOWERCASE_Z_CODE);
}

function rotateCapitalCode(charCode, rotAmount) {
  charCode += rotAmount;

  if (charCode > CAPITAL_Z_CODE) {
    let overage = charCode - CAPITAL_Z_CODE;
    charCode = CAPITAL_A_CODE - 1 + overage;
  }

  return charCode;
}

function rotateLowerCaseCode(charCode, rotAmount) {
  charCode += rotAmount;

  if (charCode > LOWERCASE_Z_CODE) {
    let overage = charCode - LOWERCASE_Z_CODE;
    charCode = LOWERCASE_A_CODE - 1 + overage;
  }

  return charCode;
}

function rot13(string) {
  let rotatedString = '';
  const ROTATION_AMOUNT = 13;

  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    let charCode = character.charCodeAt();

    if (isCapitalLetter(character)) {
      charCode = rotateCapitalCode(charCode, ROTATION_AMOUNT);
    } else if (isLowerCaseLetter(character)) {
      charCode = rotateLowerCaseCode(charCode, ROTATION_AMOUNT);
    }

    character = String.fromCharCode(charCode);
    rotatedString += character;
  }

  return rotatedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs: Teachers open the door, but you must enter by yourself.
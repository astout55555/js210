const CAPITAL_A_CODE = 65;
const CAPITAL_Z_CODE = 90;
const LOWERCASE_a_CODE = 97;
const LOWERCASE_z_CODE = 122;

function isCapitalLetter(character) {
  let characterCode = character.charCodeAt();
  if (characterCode >= CAPITAL_A_CODE && characterCode <= CAPITAL_Z_CODE) {
    return true;
  } else {
    return false;
  }
}

function isLowerCaseLetter(character) {
  let characterCode = character.charCodeAt();
  if (characterCode >= LOWERCASE_a_CODE && characterCode <= LOWERCASE_z_CODE) {
    return true;
  } else {
    return false;
  }
}

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    let charCode = character.charCodeAt();

    if (isCapitalLetter(character)) {
      charCode += 13;
      if (charCode > CAPITAL_Z_CODE) {
        let overage = charCode - CAPITAL_Z_CODE;
        charCode = CAPITAL_A_CODE - 1 + overage;
      }
    } else if (isLowerCaseLetter(character)) {
      charCode += 13;
      if (charCode > LOWERCASE_z_CODE) {
        let overage = charCode - LOWERCASE_z_CODE;
        charCode = LOWERCASE_a_CODE - 1 + overage;
      }
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
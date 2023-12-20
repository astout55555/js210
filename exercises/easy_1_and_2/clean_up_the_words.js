function cleanUp(string) {
  let spacedString = string.replaceAll(/[^a-z^A-Z]/g, ' ');
  let singleSpacedString = spacedString.split(/[ ]+/).join(' ');
  return singleSpacedString;
}

cleanUp("---what's my +*& line?");    // " what s my line "

// LS Solution without using regex:

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

const lastChar = (text) => text[text.length - 1];

const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';

// Some fellow students have more condensed regex solutions:

function cleanUp(string) {
  return string.replace(/\W+/g, " "); // non-word characters
}

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' '); // case-insensitive tag
}

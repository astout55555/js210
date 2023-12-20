function century(year) {
  let numericCentury = Math.ceil(year / 100);
  let stringCentury = numericCentury.toString();

  let secondToLastCharacter = stringCentury[stringCentury.length - 2];
  if (secondToLastCharacter === '1') {
    return stringCentury + 'th';
  } 

  let lastCharacter = stringCentury[stringCentury.length - 1];
  let ending = '';
  switch (lastCharacter) {
    case '1':
      ending = 'st';
      break;
    case '2':
      ending = 'nd';
      break;
    case '3':
      ending = 'rd';
      break;
    default:
      ending = 'th';
      break;
  }

  return stringCentury + ending;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

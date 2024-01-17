// Sum

function sum(num1, num2) {
  return num1 + num2;
}

sum(22, 10); // 32

// Log Quote

function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

brendanEichQuote();
// logs:
// Always bet on JavaScript.

// Cite the Author

function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

// Squared Number

function squaredNumber(num) {
  return num ** 2;
}

squaredNumber(3); // 9

// Three-way comparison

function compareByLength(string1, string2) {
  if (string1 > string2) {
    return 1;
  } else if (string2 > string1) {
    return -1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

// Transformation

let captain = 'Captain Ruby';
captain = captain.replace('Ruby', 'JavaScript'); // strings are immutable
console.log(captain);

// Internationalization

function greet(languageCode) {
  switch (languageCode) {
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'Hi!';
  }
}

greet(); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('af'); // 'Haai!'

// Locale

function extractLanguage(locale) {
  let languageCode = locale.slice(0, 2);
  return languageCode;
  // or `return locale.split('_')[0];`
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractRegion(locale) {
  return locale.split('_')[1]
    .split('.')[0];
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

// Internationalization 2

function localGreet(locale) {
  let languageCode = extractLanguage(locale);
  let regionCode = extractRegion(locale);

  if (languageCode === 'en') {
    if (regionCode === 'US') {
      return 'Hey!';
    } else if (regionCode === 'GB') {
      return 'Hello!';
    } else if (regionCode === 'AU') {
      return 'Howdy!';
    }
  }

  return greet(languageCode);
}

// LS Solution is more concise using a switch statement:

// function localGreet(locale) {
//   let language = extractLanguage(locale);
//   let region = extractRegion(locale);

//   switch (region) {
//     case 'US': return 'Hey!';
//     case 'GB': return 'Hello!';
//     case 'AU': return 'Howdy!';
//     default: return greet(language);
//   }
// }

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

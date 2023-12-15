function shortLongShort(string1, string2) {
  let short;
  let long;
  if (string1.length < string2.length) {
    short = string1;
    long = string2;
  } else {
    short = string2;
    long = string1;
  }

  return short + long + short;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

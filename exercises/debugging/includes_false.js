// original code:
// function includesFalse(list) {
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element == false) {
//       return true;
//     }
//   }

//   return false;
// }
//                                                                   // returns:
// includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
// includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
// includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

// fixed and linted code:
function includesFalse(list) {
  for (let idx = 0; idx < list.length; idx++) {
    let element = list[idx];

    if (element === false) { // changed `==` to `===` so the `0` doesn't meet condition
      return true;
    }
  }

  return false;
}

includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);
// last function call returned true, now correctly returns false

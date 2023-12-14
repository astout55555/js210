// my original solutions:

// function indexOf(firstString, secondString) {
//   for (let index = 0; index < firstString.length; index++) {
//     let substring = ''
//     for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
//       substring += firstString[index + subIndex];
//     }

//     if (substring === secondString) {
//       return index;
//     }
//   }

//   return -1;
// }

// function lastIndexOf(firstString, secondString) {
//   let matches = [];
//   for (let index = 0; index < firstString.length; index++) {
//     let substring = ''
//     for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
//       substring += firstString[index + subIndex];
//     }

//     if (substring === secondString) {
//       matches.push(index);
//     }
//   }

//   lastIndex = -1
//   matches.forEach( index => {
//     if (index > lastIndex) {
//       lastIndex = index;
//     }
//   });
//   return lastIndex;
// }

// further exploration solution, implementing lastIndexOf by using indexOf:

// function indexOf(firstString, secondString) {
//   for (let index = 0; index < firstString.length; index++) {
//     let substring = ''
//     for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
//       substring += firstString[index + subIndex];
//     }

//     if (substring === secondString) {
//       return index;
//     }
//   }

//   return -1;
// }

// function lastIndexOf(firstString, secondString) {
//   let matchingIndexes = [];
//   let startingIndex = indexOf(firstString, secondString);
//   if (startingIndex === -1) return -1;

//   for (let index = startingIndex; index < firstString.length; index++) {
//     let substring = ''
//     for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
//       substring += firstString[index + subIndex];
//     }

//     if (substring === secondString) {
//       matchingIndexes.push(index);
//     }
//   }

//   return matchingIndexes.pop();
// }

// even better though would be to build the matching list, then pull from that:

function allIndexesOf(firstString, secondString) {
  let matchingIndexes = [];

  for (let index = 0; index < firstString.length; index++) {
    let substring = ''
    for (let subIndex = 0; subIndex < secondString.length; subIndex++) {
      substring += firstString[index + subIndex];
    }

    if (substring === secondString) {
      matchingIndexes.push(index);
    }
  }

  return matchingIndexes;
}

function indexOf(firstString, secondString) {
  let matchingIndexes = allIndexesOf(firstString, secondString)
  firstIndex = matchingIndexes.shift();
  if (Number.isInteger(firstIndex)) {
    return firstIndex;
  } else {
    return -1;
  }
}

function lastIndexOf(firstString, secondString) {
  let matchingIndexes = allIndexesOf(firstString, secondString);
  matchingIndexes.unshift(-1);
  return matchingIndexes.pop();
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

function centerOf(string) {
  let halfLength = string.length / 2;
  let middleIndex = Math.floor(halfLength);

  if (Number.isInteger(halfLength)) {
    return string[middleIndex - 1] + string[middleIndex];
  } else {
    return string[middleIndex];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// LS Solution:

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

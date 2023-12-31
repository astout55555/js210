/*

Problem:
-take array input, return the single duplicated value within it

Algorithm:
1. build copy of the array item by item
2. while building, check if the item is already in copy. return it if so

*/

function findDup(arrayWithDup) {
  let arrayCopy = [];

  for (let index = 0; index < arrayWithDup.length; index++) {
    if (arrayCopy.includes(arrayWithDup[index])) {
      return arrayWithDup[index];
    } else {
      arrayCopy.push(arrayWithDup[index]);
    }
  }
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));                 // 73

// LS solution:

function findDup(array) {
  const seen = {}; // naming convention makes code clearer

  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i]; // returns value if seen is true
    } else {
      seen[array[i]] = true; // builds object, recording seen values
    }
  }
}

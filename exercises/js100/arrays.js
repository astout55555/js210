// Filter

let scores = [96, 47, 113, 89, 100, 102];
let countOfLarges = scores.filter( number => number >= 100).length;
console.log(countOfLarges);

// Vocabulary

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(subArray => {
  subArray.forEach(word => console.log(word));
});

// Expected output:
// happy
// cheerful
// merry
// etc...

// Travel

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(targetDestination, destinations) {
  for (let index = 0; index < destinations.length; index++) {
    if (targetDestination === destinations[index]) {
      return true;
    }
  }

  return false;
}

// or:
// function contains(element, list) {
//   return list.indexOf(element) >= 0; // indexOf() returns -1 if not found
// }

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

// Grocery List

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []

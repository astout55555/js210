// #1

function objectHasProperty(object, string) {
  return object.hasOwnProperty(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// without using hasOwnProperty(), LS solution:

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

// #2

function incrementProperty(object, propertyName) {
  // could also use `if (object[propertyName]) {`, undefined (falsey) if not found...
  // however, this doesn't work if any property values are null or undefined.
  if (objectHasProperty(object, propertyName)) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object.propertyName;
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// #3

function copyProperties(object1, object2) {
  for (let property in object1) {
    object2[property] = object1[property];
  }

  return Object.keys(object1).length;
}

// LS solution is a little easier to read, better names and counts the copies:

function copyProperties(source, destination) {
  let count = 0;
  for (let property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// #4

/*

Problem: take a string and return an object with a count of each word from the string

Data: 
  string argument
  object is returned
    words (strings) are keys
    count (numbers) are values

Algorithm:
1. split string into array of words
2. declare results variable with empty object literal
3. iterate through words array
  for each, check if the word is already a property of the results object
    if so, add one to its value (count)
    if not, create the property with that name and a value of 1
4. return results object

*/

function wordCount(string) {
  let resultsObject = {};
  let words = string.split(' ');

  words.forEach( word => {
    if (Object.keys(resultsObject).includes(word)) { // better: `if (!resultsObject[word])`
      resultsObject[word] += 1;
    } else {
      resultsObject[word] = 1;
    }
  });

  return resultsObject;
}

// Alternative solution from LS which builds on prior functions:

// problem 1
function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// problem 2
function incrementProperty(object, propertyName) {
  if (objectHasProperty(object, propertyName)) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

// problem 4
function wordCount(str) {
  let obj = {};
  let arr = str.split(' ');
  arr.forEach((word) => incrementProperty(obj, word));
  return obj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

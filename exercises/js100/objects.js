// Jane Meets Bobby

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // add code here
//   greet: function(name) {
//     console.log(`Hej, ${name}!`);
//   },
// };

// jane.greet('Bobby'); // Hej, Bobby!

// // Car Keys

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle);

// // Convert Obj to Nested Array

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = Object.entries(person);

// // // or build it with a for...in loop:
// // let nestedPerson = [];

// // for (let property in person) {
// //   nestedPerson.push([property, person[property]]);
// // }

// console.log(nestedPerson);

// // Output:
// // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// // ...and vice versa

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let reformedObject = {};
// nestedArray.forEach( pair => {
//   reformedObject[pair[0]] = pair[1];
// });

// // // or, using a recently added method from ES10:
// // let reformedObject = Object.fromEntries(nestedArray);

// console.log(reformedObject);

// // Expected output:
// // { title: 'Duke', name: 'Nukem', age: 33 }

// Cloning a Person (making a shallow copy of an object)

function clone(obj) {
  // TODO
  let newObj = {};
  Object.entries(obj).forEach( pair => {
    let key = pair[0];
    let value = pair[1];
    newObj[key] = value;
  });

  return newObj;
}

// // or, this is much easier:
// function clone(obj) {
//   return Object.assign({}, obj);
// }

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

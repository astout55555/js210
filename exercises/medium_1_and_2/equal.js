// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true
// this occurs because objects are only considered equal if they are the same object
// to compare the values of the property, we could do this instead: 

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);    // true

// or, LS solution, make them reference the same object:

// const person = { name: 'Victor' };
// const otherPerson = person;

// console.log(person === otherPerson);    // true

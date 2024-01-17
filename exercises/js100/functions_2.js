// Greet

function greet(greeting = 'Hello', greeted = 'world') {
  console.log(`${greeting}, ${greeted}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function newGreet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

newGreet();

// BMI

function calculateBMI(heightCM, weightKG) {
  let bmi = (weightKG / ((heightCM / 100) ** 2));
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"

// Cat Age

function catAge(humanYears) {
  let convertedAge = 0;
  for (let count = 1; count <= humanYears; count++) {
    if (count === 1) {
      convertedAge += 15;
    } else if (count === 2) {
      convertedAge += 9;
    } else {
      convertedAge += 4;
    }
  }

  console.log(convertedAge);
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

// Remove Last Char

function removeLastChar(string) {
  let characters = string.split('');
  characters.pop();
  return characters.join('');
  // or replace above with `return string.substring(0, string.length - 1);`
  // or `return string.slice(0, -1);`
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

// Arrow Functions

const template = 'I VERB NOUN.';

// function declaration:
// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// arrow syntax:
const sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

// function expression:
// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

// arrow syntax:
let initGame = () => ({level: 1, score: 0,});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

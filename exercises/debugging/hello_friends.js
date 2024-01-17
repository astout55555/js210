// original code:
// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   words[idx];
// }

// function greet(...args) {
//   const names = Array.prototype.slice.call(args);

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const greeting = randomGreeting;

//     console.log(`${greeting}, ${name}!`);
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// fixed (and linted) code:
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
    'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx]; // added `return`
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const greeting = randomGreeting(); // added `()`

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

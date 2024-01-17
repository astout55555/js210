// Yes? No?

let randomNumber = Math.round(Math.random());
if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}

console.log(randomNumber ? 'Yes!' : 'No.');

// Check the Weater

let weather = 'sunny';

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside.");
}

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log("Let's stay inside.");
}

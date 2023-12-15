let finalInteger = parseInt(prompt('Please enter an integer greater than 0:'), 10);
let sumOrProduct = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (sumOrProduct === 's') {
  let sum = 0;
  for (let i = 1; i <= finalInteger; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${finalInteger} is ${sum}.`);
} else if (sumOrProduct === 'p') {
  let product = 1;
  for (let i = 1; i <= finalInteger; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${finalInteger} is ${product}.`);
} else {
  console.log('Invalid input, please refresh the page and try again.');
}

// LS solution uses separate methods to keep things cleaner:

// function computeSum(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// function computeProduct(number) {
//   let total = 1;

//   for (let i = 1; i <= number; i += 1) {
//     total *= i;
//   }

//   return total;
// }

// const number = parseInt(prompt('Please enter an integer greater than 0'), 10);
// const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

// if (operation === 's') {
//   let sum = String(computeSum(number));
//   console.log(`The sum of the integers between 1 and ${String(number)} is ${sum}.`);
// } else if (operation === 'p') {
//   let product = String(computeProduct(number));
//   console.log(`The product of the integers between 1 and ${String(number)} is ${product}.`);
// } else {
//   console.log('Oops. Unknown operation.');
// }

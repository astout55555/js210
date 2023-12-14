/*

Problem: compute the greatest common divisor of 2 positive integers

Data: numbers, positive integers

General Algorithm:
1. find all divisors of first number
2. find all divisors of 2nd number
3. find which divisors are shared
4. return greatest of these shared divisors

------
Somewhat more efficient algorithm:
1. find all divisors of first number (push into a predeclared variable set to an array)
2. find divisors of 2nd number, in reverse
  -if divisor is not found on first list, continue
  -if divisor is found, return it (first/largest divisor in commom)

------
not very efficient still, but problem was solved without knowing much about the math

*/


function gcd(integer1, integer2) {
  let divisors = [];

  for (let divisor = 1; divisor <= integer1; divisor++) {
    if (integer1 % divisor === 0) {
      divisors.push(divisor);
    }
  }

  for (let divisor = integer2; divisor >= 1; divisor--) {
    if (integer2 % divisor === 0 && divisors.includes(divisor)) return divisor;
  }
}

console.log(gcd(12, 4));  // 4
console.log(gcd(15, 10)); // 5
console.log(gcd(9, 2));   // 1

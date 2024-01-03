/*

Problem: copy the values of the array, but not the reference
-must find 2 ways to solve this problem

Data: arrays (objects), with numbers as elements

Algorithm 1:
1. use slice()

Algorithm 2:
1. use toReversed().reverse()

*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

const myThirdArray = myArray.toReversed().reverse();

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
console.log(myThirdArray);

// 1

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// rewritten without shorthands:
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux
//   };
// }

// 2

// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// rewritten without shorthands:

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// 3

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// rewritten with class JavaScript syntax (no shorthands):
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// 4

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

// rewritten with classic syntax:
// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// 5

// with shorthand:
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

// classic syntax:
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// 6

// // with syntactic sugar:
// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// // classic JS:
// function product(numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let numberArray = [2, 3, 4, 5];
// let result = product(numberArray);

// // or:
// function product() {
//   let numbers = [arguments[0], arguments[1], arguments[2], arguments[3]];
//   // or `let numbers = Array.from(arguments);`
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// 7

// // original code:
// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };

// // replacing the word HERE so the program prints as shown:
// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// 8

// // original code:
// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const { first, second, ...rest } = obj;
// // rewrite this final line using classic syntax:
// const first = obj.first;
// const second = obj.second;
// const rest = {third: obj.third, rest: obj.rest,};

// 9 (optional challenge)
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code, now filled in:
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// // 10 (optional challenge)
// function returnObject(first, middle1, middle2, middle3, last) {
//   return {
//     first,
//     last,
//     middle: [middle1, middle2, middle3].sort(),
//   };
// }

// let arrayOfStringArgs = ['first', 'second', 'third', 'fourth', 'last'];
// let {first, last, middle} = returnObject(...arrayOfStringArgs);

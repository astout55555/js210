// refactor this so it works with any number of args:
// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

function invoiceTotal(...amounts) {
  return amounts.reduce( (accumulator, amount) => { 
    return accumulator + amount }, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));          // 140 - works before refactoring
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // 220 - does not work until refactored

function isDoubleNumber(integer) {
  let numericString = integer.toString();
  let digits = numericString.split('');

  let totalDigits = digits.length;
  if (totalDigits % 2 === 1) return false;
  
  let firstHalf = [];
  for (let index = 0; index < totalDigits / 2; index++) {
    let digit = digits.shift();
    firstHalf.push(digit);
    
    if (firstHalf.toString() === digits.toString()) return true;
  }
}

function twice(integer) {
  if (isDoubleNumber(integer)) {
    console.log(integer);
  } else {
    console.log(integer * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// LS Solution uses #substring() rather than attempting to compare arrays:

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length / 2;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

// debugged and linted code:
const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch (error) { // added `(error)` so the error is assigned to a variable name
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let idx = 0; idx < transactionLog.length; idx++) {
    total += transactionLog[idx];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

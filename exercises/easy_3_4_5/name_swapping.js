function swapName(firstAndLastName) {
  return firstAndLastName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// FE: Refactor to accommodate more than one first name

function swapName(fullName) {
  let names = fullName.split(' ');
  if (names.length > 2) {
    let lastName = names.pop();
    return `${lastName}, ${names.join(' ')}`;
  } else {
    return names.reverse().join(', ');
  }
}

console.log(swapName('Bobby Ray Joe Roberts'));    // "Roberts, Bobby Joe"

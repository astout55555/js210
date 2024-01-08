// Combining Arrays:

function union(array1, array2) {
  let results = [];
  array1.forEach( element => { results.push(element) });

  array2.forEach( element => {
    if (!results.includes(element)) {
      results.push(element);
    }
  });

  return results;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// LS Solution that works with any number of args:

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

// Combine Two Lists:

function interleave(array1, array2) {
  let newArray = [];

  for (let index = 0; index < array1.length; index++) {
    newArray.push(array1[index]); // or `newArray.push(array1[index], array2[index]);`
    newArray.push(array2[index]);
  }

  return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

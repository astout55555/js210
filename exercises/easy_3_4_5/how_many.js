function countOccurrences(array) {
  let counts = {};

  array.forEach( element => {
    counts[element] = counts[element] || 0;
    counts[element] += 1;
  });

  for (let [item, count] of Object.entries(counts)) {
    console.log(`${item} => ${count}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

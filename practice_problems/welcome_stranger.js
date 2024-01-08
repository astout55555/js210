function greetings(personNames, personInfo) {
  // let fullName = '';
  // for (let index = 0; index < personNames.length; index++) {
  //   if (index === personNames.length - 1) {
  //     fullName += personNames[index];
  //   } else {
  //     fullName += (personNames[index] + ' ');
  //   }
  // }
  let fullName = personNames.join(' '); // much more concise if I'm working with an array

  console.log(`Hello, ${fullName}! Nice to have a ${personInfo.title} ${personInfo.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

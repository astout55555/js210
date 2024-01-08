function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    } // iterates through args

    log(result); // and prints the string using function log() above as shorthand
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // first to print
    // comes out as: 'Welcome'
    anotherOne(116, 111); // then this is called and resolved 2nd, within the one() call
    // prints out: 'to'
  }

  anotherAnotherOne(); // this is called and resolved first, when one() is called below
  anotherOne(116, 104, 101); // this is then called 2nd after the above resolves
  // prints out: 'the'
  return anotherOne;
}

// in the top scope, `one()` resolves first, returning the function `anotherOne`,
// which is then called with the below list of arguments:
one()(77, 97, 116, 114, 105, 120, 33); // returns undefined
// prints: 'Matrix!'

// full output:
// 'Welcome'
// 'to'
// 'the'
// 'Matrix!'

// LS solution breaks it down visually:
// 1: one();
// 2: anotherAnotherOne();                         // Welcome
// 3: anotherOne(116, 111);
// 4: log(result);                                 // to
// 5: anotherOne(116, 104, 101);
// 6: log(result);                                 // the
// 7: anotherOne(77, 97, 116, 114, 105, 120, 33);
// 8: log(result);                                 // Matrix!

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

const READLINE_SYNC = require('readline-sync');

function requireLogIn() {
  const PASSWORD = 'password';

  for (let attempt = 1; attempt <=3; attempt++) {
    let userResponse = READLINE_SYNC.question('What is the password: ');
    if (userResponse === PASSWORD) {
      console.log('You have successfully logged in.');
      return;
    }
  }

  console.log('You have been denied access.');
}

requireLogIn();

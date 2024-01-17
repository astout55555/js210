// 1: Original
// let title = "The Three-Body Problem";

// 1: Corrected
// let title = 'The Three-Body Problem';

// 2: Original
// let title = 'The Three-Body Problem',
//     author = 'Cixin Liu',
//     page_count = 400;

// 2: Corrected
let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// 3: Original
// let completed = lastPageRead == 400;

// 3: Corrected
let completed = lastPageRead === 400;

// 4: Original
if (finishedBook())
  console.log('You have finished reading this book');

// 4: Corrected
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// 5: Original
function read(pages) {
  console.log('You started reading.');
  for (let page=0; page<pages; page++) {
          let message = 'You read page '+page;
          console.log(message);
  }
}

read(400);

// 5: Corrected
let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + page.toString();
    console.log(message);
  }
}

read(400);

// Changes the style guide recommends:
// Using two spaces to indent code.
// Surrounding operators with spaces.
// Using explicit string coercion, and as such, the page variable is coerced to a string.
// Avoiding the ++ and -- operators.
// Using named function expressions instead of function declarations.


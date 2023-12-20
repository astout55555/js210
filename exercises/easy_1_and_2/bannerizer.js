// function logInBox(string) {
//   let width = string.length + 4;

//   let topAndBottomLines = '+';
//   for (let column = 1; column <= width - 2; column++) {
//     topAndBottomLines += '-';
//   }
//   topAndBottomLines += '+';

//   let paddingLines = '|';
//   for (let column = 1; column <= width - 2; column++) {
//     paddingLines += ' ';
//   }
//   paddingLines += '|';

//   let centerLine = `| ${string} |`;

//   console.log(topAndBottomLines);
//   console.log(paddingLines);
//   console.log(centerLine);
//   console.log(paddingLines);
//   console.log(topAndBottomLines);
// }

// logInBox('To boldly go where no one has gone before.');

// Further Exploration: modify function to truncate message based on width (2nd arg)

// function logInBox(string, maxWidth) {
//   let width = string.length + 4;
//   if (maxWidth) {
//     width = (width < maxWidth) ? width : maxWidth;
//   }

//   let horizontalRule = '+';
//   for (let column = 1; column <= width - 2; column++) {
//     horizontalRule += '-';
//   }
//   horizontalRule += '+';

//   let emptyLine = '|';
//   for (let column = 1; column <= width - 2; column++) {
//     emptyLine += ' ';
//   }
//   emptyLine += '|';

//   let centerLine = '| ';
//   if (string.length > width - 4) {
//     let truncatedString = '';
//     for (let index = 0; index < width - 4; index++) {
//       truncatedString += string[index];
//     }
//     centerLine += `${truncatedString} |`;
//   } else {
//     centerLine += `${string} |`;
//   }

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(centerLine);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

// logInBox('To boldly go where no one has gone before.', 40);

// Further, further exploration: Modify function to wrap the text while still boxing message

function chunkMessageToFit(string, width) {
  let chunks = [];
  let chunk = '';
  for (let index = 0; index < string.length; index++) {
    chunk += string[index];
    if (chunk.length === width - 4) {
      chunks.push(chunk);
      chunk = '';
    }
  }

  if (chunk) {
    chunks.push(chunk);
  }

  if (chunks.length > 0) {
    return chunks;
  } else {
    return [''];
  }
}

// Note: String.prototype.slice() would allow me to more quickly pull out substrings

function logCenterLines(messageChunks, width) {
  while (messageChunks.length > 1) {
    console.log(`| ${messageChunks.shift()} |`);
  }

  let finalChunkLength = messageChunks[messageChunks.length - 1].length; 
  if (finalChunkLength < width - 4) {
    let finalCenterLine = '| ';
    let rightMarginSize = width - 3 - finalChunkLength;
    let rightMargin = '';
    for (let index = 0; index < rightMarginSize; index++) {
      rightMargin += ' ';
    }

    finalCenterLine += `${messageChunks[messageChunks.length - 1]}${rightMargin}|`;
    console.log(finalCenterLine);
  } else {
    console.log(`| ${messageChunks.shift()} |`);
  }
}

function logInBox(string, maxWidth) {
  let width = string.length + 4;
  if (maxWidth) {
    width = (width < maxWidth) ? width : maxWidth;
  }

  let horizontalRule = '+';
  for (let column = 1; column <= width - 2; column++) {
    horizontalRule += '-';
  }
  horizontalRule += '+';

  let emptyLine = '|';
  for (let column = 1; column <= width - 2; column++) {
    emptyLine += ' ';
  }
  emptyLine += '|';

  let messageChunks = chunkMessageToFit(string, width);

  console.log(horizontalRule);
  console.log(emptyLine);
  logCenterLines(messageChunks, width);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.', 80);
logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Once upon a time there was a very long-winded sailor. He said: "When I was younger, I took life by the horns and boy howdy it was great! Let me tell you the whole story, start to finish. Here goes...okay, so I was tinkering in my workshop, and an owl came to say hello to me so I grabbed that great-horned owl by the horns and gave it a big ol\' kiss! How\'s that for carpe diem!"', 80);

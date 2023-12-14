function average(array) {
  let total = scores.reduce( (accumulator, score) => accumulator + score );
  let averageScore = total / scores.length;
  return averageScore;
}

let scores = [];

let moreScores;
do {
  scores.push(Number(prompt('Enter score:')));
  moreScores = prompt('Do you have another score to enter? (y/n)');
} while (moreScores === 'y')

let averageScore = average(scores);

let grade = '';
if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your ${scores.length} scores your letter grade is "${grade}".`);

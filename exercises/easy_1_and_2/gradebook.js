function getGrade(score1, score2, score3) {
  let averageScore = (score1 + score2 + score3) / 3;

  let grade = '';
  if (averageScore >= 90) {
    grade = 'A';
  } else if (averageScore >= 80) {
    grade = 'B';
  } else if (averageScore >= 70) {
    grade = 'C';
  } else if (averageScore >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

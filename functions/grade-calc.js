//students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculator = function(studentScore, totalScore = 100) {
  const percent = (studentScore / totalScore) * 100;

  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} with a ${percent}%`;
};

const min = 0;
const max = 100;
let myGrade = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(gradeCalculator(myGrade));

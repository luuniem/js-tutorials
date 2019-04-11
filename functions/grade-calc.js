//students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalculator = function(studentScore, totalScore = 100) {
  let percent = (studentScore / totalScore) * 100;
  let letterGrade = "";

  if (percent <= 100) {
    letterGrade = "A";
  } else if (percent <= 89) {
    letterGrade = "B";
  } else if (percent <= 79) {
    letterGrade = "C";
  } else if (percent <= 69) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} with a ${percent}%`;
};

console.log(gradeCalculator(59.5));

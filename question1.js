// =========================
// Question 1: Switch + Ternary
// =========================
let score = 110;
let grade;

// A switch statement normally checks exact values,
// so for ranges we use the common pattern: switch(true)
switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score <= 89:
    grade = "B";
    break;
  case score >= 70 && score <= 79:
    grade = "C";
    break;
  case score >= 60 && score <= 69:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log("Q1 Score:", score, "Grade:", grade);

// Ternary operator to check pass/fail (60 or above = pass)
let result = score >= 60 ? "Passed" : "Failed";
console.log("Q1 Result:", result);

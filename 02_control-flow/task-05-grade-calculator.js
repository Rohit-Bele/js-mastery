
function calculateGrade(marks) {
  if (marks >= 90) {
    return "Grade A";
  } else if (marks >= 70) {
    return "Grade B";
  } else if (marks >= 50) {
    return "Grade C";
  } else {
    return "Fail";
  }
}

const student1 = calculateGrade(95);
const student2 = calculateGrade(78);
const student3 = calculateGrade(55);
const student4 = calculateGrade(30);

console.log("Student1:", student1); 
console.log("Student2:", student2); 
console.log("Student3:", student3); 
console.log("Student4:", student4); 

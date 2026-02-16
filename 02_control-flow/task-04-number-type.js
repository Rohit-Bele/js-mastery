
function checkNumberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

const result1 = checkNumberType(10);
const result2 = checkNumberType(-5);
const result3 = checkNumberType(0);

console.log("Result1:", result1);
console.log("Result2:", result2);
console.log("Result3:", result3); 

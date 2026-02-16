
function findLargest(num1, num2) {
  if (num1 > num2) {
    return `${num1} is larger`;
  } else if (num2 > num1) {
    return `${num2} is larger`;
  } else {
    return "Both numbers are equal";
  }
}

const result1 = findLargest(10, 20);
const result2 = findLargest(50, 25);
const result3 = findLargest(30, 30);

console.log("Result1:", result1); 
console.log("Result2:", result2); 
console.log("Result3:", result3); 

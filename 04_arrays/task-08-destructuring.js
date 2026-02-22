

const numbers = [10, 20, 30, 40, 50];


//  Basic Destructuring
// Extract first two values
const [first, second] = numbers;
console.log("First:", first);   // 10
console.log("Second:", second); // 20


//  Skip Elements
// Skip second value and extract third
const [num1, , num3] = numbers;
console.log("First:", num1);  // 10
console.log("Third:", num3);  // 30


//  Rest Operator
// Extract first value and store remaining values
const [head, ...rest] = numbers;
console.log("Head:", head); // 10
console.log("Rest:", rest); // [20, 30, 40, 50]


//  Swap Two Variables Using Destructuring
let a = 5;
let b = 10;

// Swap without temp variable
[a, b] = [b, a];

console.log("After Swap:");
console.log("a:", a); // 10
console.log("b:", b); // 5
// Task 04: Array Iteration Practice using forEach

const arr = [2, 4, 7, 9, 12, 15];

// Print all elements
arr.forEach(item => console.log("Element:", item));


// Print square of each element
console.log("\nSquare of each element:");
arr.forEach(item => {
  console.log(item * item);
});


// Count even numbers
console.log("\nCounting even numbers:");
let evenCount = 0;

const arr2 = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.forEach(item => {
  if (item % 2 === 0) {
    evenCount++;
  }
});

console.log("Total even numbers:", evenCount);


// Count odd numbers
console.log("\nCounting odd numbers:");
let oddCount = 0;

arr2.forEach(item => {
  if (item % 2 !== 0) {
    oddCount++;
  }
});

console.log("Total odd numbers:", oddCount);


// Calculate sum of array elements
console.log("\nCalculating sum:");
let sum = 0;

arr2.forEach(item => {
  sum += item;
});

console.log("Sum of array:", sum);
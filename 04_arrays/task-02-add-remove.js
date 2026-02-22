// Task 02: Add & Remove Operations in Array

const fruits = ["apple", "banana", "mango"];

// Add element at the end
fruits.push("orange"); // ["apple", "banana", "mango", "orange"]

// Remove last element
fruits.pop(); // removes "orange"

// Add element at the beginning
fruits.unshift("pineapple"); // ["pineapple", "apple", "banana", "mango"]

// Remove first element
fruits.shift(); // removes "pineapple"

// Final updated array
console.log("Updated fruits:", fruits);

// Print array length
console.log("Array length:", fruits.length);
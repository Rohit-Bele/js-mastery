// Task 03: Searching in Arrays

const numbers = [10, 20, 30, 40, 50];

// Check if 30 exists in array
console.log("Includes 30:", numbers.includes(30)); // true

// Find index of 40
console.log("Index of 40:", numbers.indexOf(40)); // 3



// Array of user objects
const users = [
  { id: 1, name: "Rohit" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Sara" }
];

// Find user with id = 2
const result = users.find(user => user.id === 2);

// Print found user
console.log("Found user:", result);

// Print only user name
console.log("User name:", result.name);
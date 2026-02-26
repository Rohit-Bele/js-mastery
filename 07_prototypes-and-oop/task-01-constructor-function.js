
// Constructor function to create User objects
// 'this' refers to the new object created using 'new' keyword
function User(name, age) {
  this.name = name; // assign name property
  this.age = age;   // assign age property
}

// Creating objects using constructor function
const user1 = new User("Rohit", 25);
const user2 = new User("Aman", 30);

// Accessing object properties
console.log("User 1 Name:", user1.name);
console.log("User 1 Age:", user1.age);

console.log("User 2 Name:", user2.name);
console.log("User 2 Age:", user2.age);

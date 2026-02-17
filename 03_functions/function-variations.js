// FUNCTION DECLARATION
// Normal named function (hoisted)

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Rohit")); // Hello, Rohit

// ✔ Hoisted → can call before declaration
// ✔ Good for general reusable functions



//  FUNCTION EXPRESSION
// Function stored inside a variable (not hoisted)

const greetExpression = function (name) {
  return `Hello, ${name}`;
};

console.log(greetExpression("Aman"));

//  Not hoisted
//  Useful when function should not be accessible before definition



//  ARROW FUNCTION (ES6)
// Short syntax version of function expression

const greetArrow = (name) => {
  return `Hello, ${name}`;
};

console.log(greetArrow("Sara"));

// Shorter version (implicit return)
const greetShort = name => `Hello, ${name}`;
console.log(greetShort("John"));

//  No own 'this'
//  Clean and concise syntax



//  FUNCTION WITH DEFAULT PARAMETERS
// Provides default value if argument not passed

function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}

console.log(welcome());        // Welcome, Guest
console.log(welcome("Rohit")); // Welcome, Rohit



//  REST PARAMETER FUNCTION
// Collects unlimited arguments into an array

function sumAll(...numbers) {
  // numbers becomes array → [1,2,3,4]
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

//  Rest must be last parameter
//  Useful for dynamic inputs



//  CALLBACK FUNCTION
// Function passed as argument to another function

function add(a, b) {
  return a + b;
}

function calculate(a, b, operation) {
  return operation(a, b); // calling callback function
}

console.log(calculate(10, 5, add)); // 15

//  Used in async operations and event handling



//  IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// Runs immediately after definition

(function () {
  console.log("IIFE executed immediately");
})();

//  Used to create private scope
//  Prevents global variable pollution



//  HIGHER ORDER FUNCTION (IMPORTANT)
// A function that:
// 1. Takes another function as argument
// OR
// 2. Returns another function

// --- Example 1: Taking function as argument ---
function multiply(a, b) {
  return a * b;
}

function operate(a, b, operation) {
  return operation(a, b); // calling passed function
}

console.log(operate(5, 3, multiply)); // 15

// Here 'operate' is higher order function
// because it accepts another function as parameter


// --- Example 2: Returning a function ---
function greetUser(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetRohit = greetUser("Rohit");
greetRohit(); // Hello Rohit

// Here greetUser returns another function
// So it is also a higher order function




// During the Creation Phase of Global Execution Context:
// var variables are hoisted and initialized with undefined
// let and const are hoisted but stay in Temporal Dead Zone (TDZ)

// Accessing var before declaration (hoisted as undefined)
console.log("Value of x before declaration:", x); // undefined

// Accessing let/const before declaration would cause ReferenceError
// console.log(y); // ❌ ReferenceError (TDZ)
// console.log(z); // ❌ ReferenceError (TDZ)

// Variable declarations
var x = 10;  // hoisted and initialized as undefined, then assigned 10
let y = 20;  // hoisted but not initialized until this line
const z = 30; // hoisted but not initialized until this line

console.log("Value of x after declaration:", x);
console.log("Value of y after declaration:", y);
console.log("Value of z after declaration:", z);


// Function hoisting demonstration
// Function declarations are fully hoisted
greet(); // Works because function is hoisted

function greet() {
  console.log("Hello from hoisted function");
}

// Function expressions are not hoisted like declarations
// Only the variable is hoisted (as undefined), not the function body

// sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi from function expression");
};

sayHi(); // Works only after assignment


/*
Hoisting Flow Explanation:

Creation Phase:
- x → undefined (var hoisted)
- y → in TDZ (let hoisted but uninitialized)
- z → in TDZ (const hoisted but uninitialized)
- greet → full function stored in memory
- sayHi → undefined (only variable hoisted)

Execution Phase:
- console.log(x) → undefined
- x = 10
- y = 20
- z = 30
- greet() executes successfully
- sayHi() works only after assignment
*/
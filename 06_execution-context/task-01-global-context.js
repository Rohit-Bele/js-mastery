
// These variables are declared in the global scope.
// They become part of the Global Execution Context (GEC).
var a = 10;
let b = 20;
const c = 30;

// This function will create its own Function Execution Context (FEC)
// when it is called.
function printValue() {
  // Accessing global variable 'a' inside function
  console.log("Initial value of a:", a);

  // Modifying global variable 'a'
  // Since 'a' is not declared inside the function,
  // it refers to the global 'a'
  a = a + 2;
  console.log("Updated value of a inside function:", a);

  // Accessing other global variables
  console.log("Value of b inside function:", b);
  console.log("Value of c inside function:", c);
}

// Calling the function creates a new Function Execution Context
printValue();

// After function execution completes, control returns to Global Execution Context
// 'a' remains updated because it was modified globally
console.log("Value of a after function call:", a);
console.log("Value of b after function call:", b);
console.log("Value of c after function call:", c);
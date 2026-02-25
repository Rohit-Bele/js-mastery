
// Function one
function one() {
  console.log("Inside function one");

  // Calling function two → pushed to call stack
  two();

  console.log("Back to function one");
}

// Function two
function two() {
  console.log("Inside function two");

  // Calling function three → pushed to call stack
  three();

  console.log("Back to function two");
}

// Function three
function three() {
  console.log("Inside function three");
  // No further calls → this will finish first
}

// Start execution from global context
one();

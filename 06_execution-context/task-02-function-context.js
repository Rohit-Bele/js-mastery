
// This function creates its own Function Execution Context when called
function first() {
  let x = "First Function"; // lonly accal variable (ocessible inside first)
  console.log("Entering first");

  // Calling second() pushes new execution context onto call stack
  second();

  console.log("Exiting first");
}

// New Function Execution Context will be created when second() is called
function second() {
  let y = "Second Function"; // local variable (scoped to second)
  console.log("Entering second");

  // Calling third() pushes another execution context onto call stack
  third();

  console.log("Exiting second");
}

// This function also gets its own execution context
function third() {
  let z = "Third Function"; // local variable (scoped to third)
  console.log("Entering third");

  // No further function calls, so this context will finish first
  console.log("Exiting third");
}

// Start execution
// Global Execution Context calls first(), creating first's context
first();

/*
Execution Flow (Call Stack):

1. Global Execution Context created
2. first() called → first Execution Context pushed
3. second() called → second Execution Context pushed
4. third() called → third Execution Context pushed
5. third() finishes → popped from stack
6. second() finishes → popped from stack
7. first() finishes → popped from stack
8. Back to Global Execution Context
*/
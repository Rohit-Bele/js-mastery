
// Global scope variable
let globalVar = "I am Global";

function outer() {
  // Outer function scope variable
  let outerVar = "I am Outer";

  function inner() {
    // Inner function scope variable
    let innerVar = "I am Inner";

    // Accessing variables using scope chain
    console.log(innerVar);   // Found in inner scope
    console.log(outerVar);   // Not in inner → found in outer scope
    console.log(globalVar);  // Not in inner/outer → found in global scope
  }

  // Calling inner function creates new execution context
  inner();
}

// Calling outer function
outer();

/*
Scope Chain Explanation:

1. inner() looks for innerVar → found in its own scope ✔
2. Looks for outerVar → not in inner, goes to outer scope ✔
3. Looks for globalVar → not in inner/outer, goes to global scope ✔

This step-by-step lookup of variables is called the Scope Chain.
*/
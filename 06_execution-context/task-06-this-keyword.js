
// In global scope (Node.js), 'this' refers to an empty object {}
console.log("Global this:", this);


// 'this' inside a normal function
function normalFunction() {
  // In strict mode → undefined
  // In non-strict mode → global object (window in browser)
  console.log("this inside normal function:", this);
}

normalFunction();


//  'this' inside an object method
const user = {
  name: "Rohit",
  greet: function () {
    // 'this' refers to the object that calls the method (user)
    console.log("this inside object method:", this);
    console.log("Hello " + this.name);
  }
};

user.greet();


//  'this' inside arrow function (important difference)
const obj = {
  name: "JS",
  arrowFunc: () => {
    // Arrow functions do NOT have their own 'this'
    // They inherit 'this' from surrounding (lexical scope)
    console.log("this inside arrow function:", this);
  }
};

obj.arrowFunc();


/*
Key Observations:

1. Global Scope:
   'this' refers to global object (window in browser, {} in Node)

2. Normal Function:
   'this' depends on how the function is called
   (usually global object or undefined in strict mode)

3. Object Method:
   'this' refers to the object that owns the method (user)

4. Arrow Function:
   Does NOT have its own 'this'
   It takes 'this' from the surrounding scope (lexical this)
*/
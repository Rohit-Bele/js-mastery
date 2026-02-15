// VARIABLES: var vs let vs const

console.log("===== VARIABLES: var vs let vs const =====");

// var: can redeclare + reassign (function scoped)
var value = 5;
var value = 10; // redeclare allowed
value = 20; // reassign allowed
console.log("var value:", value); // 20

// let: cannot redeclare but can reassign (block scoped)
let count = 1;
// let count = 2; ❌ redeclare not allowed
count = 3; // reassign allowed
console.log("let count:", count);

// const: cannot redeclare or reassign (must initialize)
const fixed = 100;
// fixed = 200; ❌ error (cannot reassign)
console.log("const fixed:", fixed);

// var allows redeclaration due to function scope
// const must initialize because it creates constant binding



// SCOPE: Global vs Function vs Block Scope

console.log("\n===== SCOPE TEST =====");

var a = 1;
let b = 2;
const c = 3;

function testScope() {
  var a = 10; // function scoped
  let b = 20; // block scoped
  const c = 30;
  console.log("Inside function:", a, b, c); // 10 20 30
}

testScope();
console.log("Outside function:", a, b, c); // 1 2 3

// Inner scope variables do not affect outer scope variables



// BLOCK SCOPE BEHAVIOR

console.log("\n===== BLOCK SCOPE TRAP =====");

{
  var x = 10; // function/global scoped
  let y = 20; // block scoped
  const z = 30; // block scoped
}

console.log("x:", x); // 10
// console.log(y); ❌ ReferenceError
// console.log(z); ❌ ReferenceError

// var ignores block scope
// let & const respect block scope



// HOISTING & TEMPORAL DEAD ZONE (TDZ)

console.log("\n===== HOISTING =====");

console.log(hoistVar); // undefined (hoisted & initialized as undefined)
var hoistVar = 5;

// console.log(hoistLet); ❌ ReferenceError (Temporal Dead Zone)
let hoistLet = 10;

// var is hoisted with undefined
// let/const hoisted but remain in TDZ until declared



// FUNCTION HOISTING

console.log("\n===== FUNCTION HOISTING =====");

sayHello(); // works (function declaration hoisted)

function sayHello() {
  console.log("Hello");
}

// sayHi(); ❌ TypeError (undefined is not a function)
var sayHi = function () {
  console.log("Hi");
};

// Function declarations hoist fully
// Function expressions hoist only variable (undefined)



// PRIMITIVE vs REFERENCE TYPES

console.log("\n===== PRIMITIVE vs REFERENCE =====");

let num1 = 10;
let num2 = num1; // value copy
num2 = 20;

let obj1 = { name: "JS" };
let obj2 = obj1; // reference copy
obj2.name = "Mastery";

console.log("num1:", num1); // 10
console.log("num2:", num2); // 20
console.log("obj1.name:", obj1.name); // Mastery

// Primitives copy by value (stack)
// Objects copy by reference (heap)



// TYPEOF EDGE CASES

console.log("\n===== TYPEOF EDGE CASES =====");

console.log(typeof null); // "object" (JS historical bug)
console.log(typeof NaN); // "number"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"



// TYPE CONVERSION (EXPLICIT)

console.log("\n===== TYPE CONVERSION =====");

console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(String(100)); // "100"
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// Falsy: 0, "", null, undefined, NaN, false
// Truthy: all other values



// IMPLICIT TYPE COERCION

console.log("\n===== IMPLICIT COERCION =====");

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(5 + true); // 6
console.log(5 + false); // 5
console.log(5 + null); // 5
console.log(5 + undefined); // NaN
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // depends on context

// JS auto converts types during operations



// EQUALITY: == vs ===

console.log("\n===== == vs === =====");

console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("5" == 5); // true
console.log("5" === 5); // false

// == performs type coercion
// === compares value + type strictly



// STRICT MODE

console.log("\n===== STRICT MODE =====");

"use strict";
// undeclaredVar = 10; ❌ ReferenceError

// Strict mode prevents accidental globals and silent errors


console.log("\n===== TYPE INSPECTOR FUNCTION =====");

function inspect(value) {
  return {
    type: typeof value,
    isPrimitive: value !== Object(value),
    isTruthy: Boolean(value),
  };
}

console.log(inspect(0));
console.log(inspect("hello"));
console.log(inspect([]));
console.log(inspect(null));

// Task 07: Merge, Sort, Reverse Arrays

const arr1 = [5, 2, 9];
const arr2 = [1, 7, 3];

// Merge arrays using spread operator
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged);


// Sort array in ascending order
const ascending = [...merged].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);


// Sort array in descending order
const descending = [...merged].sort((a, b) => b - a);
console.log("Descending Order:", descending);


// Reverse the ascending array
const reversed = [...ascending].reverse();
console.log("Reversed Array:", reversed);
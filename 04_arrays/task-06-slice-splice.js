// Task 06: slice vs splice Practice

const arr = [1, 2, 3, 4, 5, 6];

// slice() → extract part (non-destructive)
const sliced = arr.slice(2, 4); // elements at index 2 and 3
console.log("Sliced array:", sliced); // [3,4]

// original array remains unchanged
console.log("Original after slice:", arr);


// splice() → remove elements (destructive)
const removedElements = arr.splice(2, 3); // remove 3 elements from index 2
console.log("Removed elements:", removedElements); // [3,4,5]

// original array is modified
console.log("Original after splice:", arr); // [1,2,6]


// splice() → insert element at index 1
arr.splice(1, 0, 4); // insert 4 at index 1
console.log("After insertion:", arr); // [1,4,2,6]
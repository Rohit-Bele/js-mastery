// Task 03: Nested Objects

const student = {
  name: "Rohit",
  age: 25,
  course: "BCA",
  address: {
    city: "Pune",
    pincode: 411001
  }
};

// Access nested property using dot notation
console.log("City:", student.address.city);

// Access nested property using bracket notation
console.log("Pincode:", student["address"]["pincode"]);

// Print multiple nested values together
console.log("City & Pincode:", student.address.city, student.address.pincode);
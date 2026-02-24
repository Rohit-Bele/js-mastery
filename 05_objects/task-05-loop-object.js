
const student = {
  name: "Rohit",
  age: 25,
  course: "BCA",
  city: "Pune"
};

// Print only values
for (let key in student) {
  console.log(student[key]);
}

//  Print key and value together
for (let key in student) {
  console.log(key + ": " + student[key]);
}

const student = {
  name: "Rohit",
  age: 25,
  course: "BCA",
  city: "Pune"
};

// Basic destructuring (extract name and city)
const { name, city } = student;
console.log("Name:", name);   // Rohit
console.log("City:", city);   // Pune


//  Rename variable while destructuring
// course → studentCourse
const { course: studentCourse } = student;
console.log("Course:", studentCourse); // BCA


// Default value (property not present in object)
const { country = "India" } = student;
console.log("Country:", country); // India
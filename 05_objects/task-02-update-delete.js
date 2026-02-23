const student = {
  name: "Rohit",
  age: 25,
  course: "BCA"
};


student.course = "mca"

console.log("updated obj: ",student)

student.city = "pune"

console.log("updated obj: ",student)

delete student.age

console.log("updated obj: ",student)

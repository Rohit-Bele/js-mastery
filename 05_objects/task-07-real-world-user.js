
const user = {
  name: "Rohit",
  age: 25,
  address: { city: "Pune", pincode: 411001 },
  hobbies: ["coding", "reading", "gaming"],
  greet: function()
   {

    return `hello ` + this.name

    }
}

console.log(user.address.city)

console.log(user.hobbies[1])

console.log(user.greet())




const user = {
  name: "Rohit",
  greet: function(greeting, time) {
    return greeting + " " + this.name + ", " + time;
  }
};

console.log(user.greet("Hello", "Good morning"));
// Hello Rohit, Good morning
// Task 05: map, filter, reduce Practice

const numbers = [5, 10, 15, 20, 25];

// 1️⃣ map() → double each number
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);


// 2️⃣ filter() → numbers greater than 15
const filtered = numbers.filter(num => num > 15);
console.log("Filtered (>15):", filtered);


// 3️⃣ reduce() → calculate total sum
const sum = numbers.reduce((acc, value) => acc + value, 0);
console.log("Total Sum:", sum);


// 4️⃣ reduce() → find maximum value
const max = numbers.reduce((acc, curr) => {
  return acc > curr ? acc : curr; // must return when using {}
}, numbers[0]);

console.log("Maximum Value:", max);


// 5️⃣ Real-World Scenario: Shopping Cart Discount
const prices = [100, 200, 300, 400];

// Apply 10% discount to each price
const discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted Prices:", discountedPrices);


// Calculate total bill after discount
const totalBill = discountedPrices.reduce((acc, price) => acc + price, 0);
console.log("Total Bill after Discount:", totalBill);
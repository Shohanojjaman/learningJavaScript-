/** What I learn in Day 2
 * Introduction to Loops
 * JS For Loop
 * JS While Loop
 * JS Do While Loop
 * Nested Loop
 * JS Break Statement
 * JS Continue Statement
 * JS Infinity Loop
 * JS String
 * String Literal vs Constructor
 * JS Escape Notation
 * String Comparison
 * String Method
 * String Length
 * JS Array
 * JS Declaration
 * Array Traversing
 * Array Insert, Remove & Replace
 * Search value in Array
 * Multidimensional Array
 * Reverse An Array
 * Array Method (Basic)
 * JS Object
 * Object Literally vs Constructor
 * Accessing Object Properties
 * Setting Object Properties
 * Remove Object Properties
 * Comparing Two Objects
 * Iterate Object Properties
 * Object Method
 */
/*********** Task 1 *********
 * The Revenue Counter: Use a for loop to print numbers from 1 to 50, but only print the ones divisible by 5 (representing 5% profit milestones).
 */

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
/* ********** Task 2 *********
 * The Savings Goal: You want to save $5,000 for a business venture. Use a while loop to simulate adding a random amount (between $100-$500) until you hit the goal. Print the total after each "month.".*/

/**
 * This function provides a random number between the min number and the max number.
 * @param {number} min Minimum Number
 * @param {number} max Maximum Number
 * @returns a random number between min number and max number.
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let savingAmount = 0;
let month = 0;
while (savingAmount < 5000) {
  month++;
  savingAmount += getRandomNumber(100, 500);
  console.log(`${month} month I saved ${savingAmount}`);

  if (savingAmount >= 5000) {
    console.log(`Hit the goal and my saving amount is ${savingAmount}`);
  }
}

// ********* Task 3 ************
/**The "Try Again" System: Use a `do.while` loop to simulate a password entry. It should run at least once and keep asking until the "password" is correct.
 */
let inputPassword;
const correctPassword = "Hello"; // The actual password
let attempt = 0;
do {
  if (attempt === 0) {
    inputPassword = prompt("Enter the password:");
  } else {
    inputPassword = prompt("Try Again. Enter the password:");
  }
  attempt++;
} while (inputPassword !== correctPassword);
console.log("Access granted!");

// ********** Task 4 ***********
//The Grid Generator: Use a nested loop to create a 3x3 grid of stars (*) in the console.

let gridNumber = 3;
for (let i = 0; i < gridNumber; i++) {
  let stars = "";
  for (let j = 0; j < gridNumber; j++) {
    stars += "*";
  }
  console.log(stars);
}

// ********* Task 5 **********
/* The Escape Artist: Write a loop from 1 to 20. If the number is 13, use break (superstition is for losers, but we're testing the keyword). If the number is even, use continue to skip it.*/

for (let i = 0; i < 20; i++) {
  if (i === 13) {
    break;
  } else if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// ********* Task 6 **********
/* The Quote Formatter: Use Escape Notation to print this exact sentence: The CEO said, "Success isn't 'given', it's earned." (Must include the quotes and a new line).*/

console.log("The CEO said, \n \"Success is't 'given', it's earned.\"");

// ********* Task 7 **********
/* The Username Validator: Take a string `userAccount`. Print whether its length is "Too Short" (under 5) or "Valid" (5 or more).*/

let userAccount = "Shohanojjaman";
if (userAccount.length < 5) {
  console.log("Too Short");
} else {
  console.log("Valid");
}

// ********* Task 8 **********
/* The Identity Crisis: Compare two strings: "shohan" and "SHOHAN". Use a method to make the comparison return true regardless of the case.*/

let string1 = "shohan";
let string2 = "SHOHAN";

let result = string1.toUpperCase() === string2;
console.log(result);

// ********* Task 9 **********
/* The Data Masker: You have a credit card number as a string (e.g., "1234567890123456"). Use a string method to only show the last 4 digits.*/

let creditCardNumber = "1234567890123456";
let shortCreditCardNumber = creditCardNumber.slice(
  creditCardNumber.length - 4,
  creditCardNumber.length,
);
console.log(shortCreditCardNumber);

// ********* Task 10 **********
/* The Spam Filter: Check if a string `businessEmail` contains the word "Free" or "Winner". Print "Spam Detected" if it does.*/

let businessEmail = "Free bitcoin";
// Process 1 (not so good)
let spam =
  businessEmail == "Free" || businessEmail == "Winner"
    ? console.log("Spam Detected")
    : console.log("Safe");
// Process 2

let isSafe =
  businessEmail.includes("Free") || businessEmail.includes("Winner")
    ? console.log("Spam Detected")
    : console.log("Safe");

// ********* Task 11 **********
/* The Team Roster: Create an array with 5 names. Use a method to add a name to the start and remove the last name.*/

let myFriendsName = ["Rakibul", "Erfan", "Shakib", "Shakil", "Rifat"];
myFriendsName.pop();
myFriendsName.unshift("Tamim");
console.log(myFriendsName);

// ********* Task 12 **********
/* The Price Audit: You have an array of prices. Use a loop to find and print only the prices higher than $100.*/

let prices = [20, 476, 120, 83, 878, 656];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    console.log(prices[i]);
  }
}

// ********* Task 13 **********
/* The Search Party: Create an array of 10 items. Write logic to check if "MacBook" exists in the array. If it does, print its index.*/
const laptop = [
  "Dell",
  "HP",
  "MacBook",
  "Lenovo",
  "Asus",
  "Microsoft",
  "Acer",
  "Razer",
  "Google",
  "Framework",
];
//Process 1 (Fundamental)
for (let i = 0; i < laptop.length; i++) {
  if (laptop[i] === "MacBook") {
    console.log(i); // Return index number
    break;
  }
}

//Process 2 (Simple and clean)
console.log(laptop.indexOf("MacBook"));

// ********* Task 14 **********
/* The Warehouse Flip: Take an array of product IDs and reverse the entire array without using the built-in .reverse() method (Use a loop).*/

const productIDs = [
  "PID-001",
  "PID-002",
  "PID-003",
  "PID-004",
  "PID-005",
  "PID-006",
  "PID-007",
  "PID-008",
  "PID-009",
  "PID-010",
];
let reverseProductIDs = [];
// Process 1
for (let i = productIDs.length - 1; i >= 0; i--) {
  reverseProductIDs.push(productIDs[i]);
}
console.log(reverseProductIDs);

// ********* Task 15 **********
/* The Warehouse Flip: Take an array of product IDs and reverse the entire array without using the built-in .reverse() method (Use a loop).*/
const shelves = [
  ["Apple", "Banana", "Orange"],
  ["Milk", "Bread", "Eggs"],
];
console.log(shelves[0][1]);

// ********* Task 16 **********
/* The Salary Increase: You have an array of salaries. Use a loop to increase every salary by 15% and update the original array.*/
const salaries = [60000, 75000, 92000, 48000, 110000];
for (let i = 0; i < salaries.length; i++) {
  salaries[i] += (salaries[i] * 15) / 100;
}
console.log(salaries);

// ********* Task 17 **********
/* The Startup Profile: Create an object myStartup with name, founder, and isProfitable (boolean). Use dot notation to change isProfitable to true.*/

const myStartup = {
  name: "TechNova",
  founder: "Jane Doe",
  isProfitable: false,
};

myStartup.isProfitable = true;
console.log(myStartup);

// ********* Task 18 **********
/* The Property Eraser: You have a `user` object with `name`, `email`, and `temporaryToken`. Use the `delete` keyword to remove the temporaryToken.*/

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  temporaryToken: "a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d",
};

delete user.temporaryToken;
console.log(user);

// ********* Task 19 **********
/* The Object Detective: Write a loop (for...in) to print all the keys and values of a car object (e.g., brand: Toyota).*/

const myCar = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "blue",
};

for (const key in myCar) {
  console.log(`${key}: ${myCar[key]}`);
}

// ********* Task 20 **********
/* The Constructor Challenge: Research the Object Constructor. Create a "Product" constructor and use it to build two different product objects.*/
/**
 *
 * @param {String} name Product Name
 * @param {Number} price Product Price
 * @param {Boolean} inStock Is product in Stock or not
 */
function Product(name, price, inStock) {
  this.name = name;
  this.price = price;
  this.inStock = inStock;
}

let phone = new Product("Samsung S25 Ultra", 224000, true);
console.log(phone);
let macBook = new Product("MacBook M3 Max", 424000, false);
console.log(macBook);

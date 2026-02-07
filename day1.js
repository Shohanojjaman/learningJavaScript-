/** What I learn in Day 1
 * Variables
 * Reserved Keywords
 * Data Types
 * Basic Numbers
 * Basic String
 * Basic Booleans
 * Null & Undefined
 * Type Conversion
 * Octal & Hexadecimal Number
 * JS Operators
 * JS Statements
 * Math Functions
 * Date Functions
 * JS Comments
 * Logics & Conditions
 * Switch Statement
 * Logical Operator
 * Ternary Operator
 * And Or Shorthand
 */

// ************Task 1************
/** Variables & Reserved Keywords
 * The Task: Create a script for a new tech startup.
 * Declare a variable for the 'companyName' (shouldn't change).
 * Declare a variable for 'currentEmployeeCount' (will change).
 * Try to name a variable 'switch' or 'class' and see what the console tells you. Tell me why it failed.
 * */
const companyName = "Web Kings Cafe";
let currentEmployeeCount = 25;
console.log(`${companyName} has ${currentEmployeeCount} Employees.`);

// let switch = 'hello' -> Reserved Keywords cannot use as variable name.d
// let class = 32

// ************Task 2************
/** Data Types (Numbers, Strings, Booleans)
 * The Task: Create a variable isHalalCertified and assign it a boolean.
 * Create a string that says: "Our company, [companyName], has [count] employees." using template literals.
 * Check the typeof each variable and log it.
 */
const isHalalCertified = true;
const str1 = `${companyName} has ${currentEmployeeCount} Employees.`; // `companyName` and `currentEmployeeCount` variables come from task 1
console.log(typeof isHalalCertified); // Result: boolean
console.log(typeof str1); // Result: String

// ************Task 3************
/** Null vs. Undefined
 * The Task: Scenario 1: A customer signs up for your platform but hasn't provided their middle name yet. How would you represent that?
 * Scenario 2: You have a variable for discountCode that doesn't exist yet in the system. Show me the difference in code.
 */

let middleName; // undefined
let discountCode = null; // null

// ************Task 4************
/** Type Conversion
 * The Task: You receive a price from a legacy API as a string: "49.99". You need to add a tax of 5.
 * If you just do +, you’ll get a mess. Convert it properly to a number first and then add the tax.
 */

let price = "49.99";
let tax = 5;

let totalPrice = Number(price) + tax;
console.log(totalPrice);

// ************Task 5************
/**Octal & Hexadecimal
 * The Task: In the business world, branding is everything. Your brand color is a Hex value: #2ecc71.
 * Assign that Hex value to a variable and find out what its Decimal equivalent is using JS.
 */
const brandColorInHex = 0x2ecc71;
console.log(Number(brandColorInHex));

// ***********Task 6************
/** JS Operators & Math FunctionsThe
 * Task: Calculate the Area of a Circle for a new logistics warehouse design where the radius is 7.
 * Use the Math object for `PI` and squaring the radius.
 * Round the final result to the nearest whole number.
 */
const PI = Math.PI;
let radius = 7;
let area = Math.round(PI * Math.pow(radius, 2));
console.log(area);

// ***********Task 7************
/**Date Functions
 * The Task: * Print the current date and time.
 * Extract just the Year and the Day of the week (as a number) from it.
 * Bonus: Figure out how to display the name of the month instead of the index number.
 */
const date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let month = date.getMonth();
console.log(day);
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Not a valid Number");
    break;
}
switch (month) {
  case 0:
    console.log("January");
    break;
  case 1:
    console.log("February");
    break;
  case 2:
    console.log("March");
    break;
  case 3:
    console.log("April");
    break;
  case 4:
    console.log("May");
    break;
  case 5:
    console.log("June");
    break;
  case 6:
    console.log("July");
    break;
  case 7:
    console.log("August");
    break;
  case 8:
    console.log("September");
    break;
  case 9:
    console.log("October");
    break;
  case 10:
    console.log("November");
    break;
  case 11:
    console.log("December");
    break;
  default:
    console.log("Not a valid Number");
    break;
}
console.log(year);

// ***********Task 8************
/** Logics & Conditions
 * The Task: The Halal Restaurant Validator.
 * Create a variable `isRamadan`.
 * Create a variable `currentHour` (24-hour format).
 * Write an `if-else` statement:
 * If it is Ramadan AND the hour is between 5 and 18 (6 PM), log "Restaurant is closed for fasting."
 * Else, log "We are open for business."
 */

const isRamadan = true;
let currentHour = date.getHours();
console.log(currentHour);

if (isRamadan && 5 <= currentHour && currentHour <= 18) {
  console.log("Restaurant is closed for fasting");
} else {
  console.log("We are open for business.");
}

// ********* Task 9************
/** Switch Statement
 * The Task: Subscription Tier System.
 * Create a variable `userPlan` (values: "Basic", "Pro", "Enterprise").
 * Use a switch statement to log the price:
 * Basic: $10
 * Pro: $20
 * Enterprise: Custom Pricing
 * Default: "Invalid Plan"
 */

let userPlan = "Basic"; // in real application it will come from clint side.
switch (userPlan) {
  case "Basic":
    console.log("Basic $10");
    break;
  case "Pro":
    console.log("Pro $20");
    break;
  case "Enterprise":
    console.log("Custom Pricing");
    break;
  default:
    console.log("Invalid Plan");
    break;
}

// *********** Task 10 **********
/** Ternary & Logical Shorthand (Shortcuts for Pros)
 * The Task: Ternary: Check if `stockCount` is greater than 0. If yes, return "In Stock"; if no, "Out of Stock". Do this in one line.
 * And/Or Shorthand: You have a variable `userNickname`. If it’s empty (null/undefined), use a default value of "Guest". Use the || shorthand to achieve this.
 */

let stockCount = 10; // It will change dynamically
let isAvailable = stockCount > 0 ? "In Stock" : "Out of Stock";
console.log(isAvailable);

let userNickname = "Shohanojjaman Emon";
let userName = userNickname || "Guest";
console.log(userName);

// Task #1

let myDateOfBirth = 2007;

let currentYear = 2025;

console.log(currentYear - myDateOfBirth);

// Task #2

// let age = Number(prompt("Enter your age:"));

// let movieType = prompt("Enter movie type (regular or 3D):").toLowerCase();

// let timeOfDay = prompt("Enter time of day (matinee or evening):").toLowerCase();

// let hasDiscount = prompt(
//   "Do you have a discount ticket (yes or no?):"
// ).toLowerCase();

// let ticketPrice = 0;

// // Price based on age

// if (age < 10) {
//   ticketPrice = 5;
// } else if (age <= 65) {
//   ticketPrice = 15;
// } else {
//   ticketPrice = 10;
// }

// // Add 5 GEL if movie is 3D

// if (movieType === "3d") {
//   ticketPrice += 5;
// }

// // Add 5 GEL if it's an evening show

// if (timeOfDay === "evening") {
//   ticketPrice += 5;
// }

// // Discount

// if (hasDiscount === "yes") {
//   let discount = ticketPrice * 0.25;
//   if (discount > 5) {
//     discount = 5;
//   }
//   ticketPrice -= discount;
// }
// // Output

// console.log("The ticket price for you is: " + ticketPrice + " Gel");

// Task #3

// Prompt the user to choose a topic
let choice = Number(
  prompt(
    "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
  )
);

let question;
let answer;

if (choice === 1) {
  question = "What is typeof(5)?";
  answer = prompt(question);

  // Check against accepted answers
  if (answer.toLowerCase() === "number") {
    alert("Correct!");
  } else {
    alert("Unfortunately, you couldn't guess.");
  }
} else if (choice === 2) {
  question = "Can let be redeclared?";
  answer = prompt(question);

  if (answer.toLowerCase() === "yes") {
    alert("Correct!");
  } else {
    alert("Unfortunately, you couldn't guess.");
  }
} else if (choice === 3) {
  question = "What does console.log(Math.floor(2.1)) return?";
  answer = prompt(question);

  if (answer.toLowerCase() === "ori") {
    alert("Correct!");
  } else {
    alert("Unfortunately, you couldn't guess.");
  }
} else {
  alert("Invalid choice. Please refresh and choose a number between 1 and 3.");
}

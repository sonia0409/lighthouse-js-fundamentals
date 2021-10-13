const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// Logical operators example 1.
const isCitizen = false;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// logical operators example 2_temperature.

const temperature = 50;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// logical operators example 3_if it is not raining.
if (!raining) {
  console.log("Leave your umbrella at home!");
}



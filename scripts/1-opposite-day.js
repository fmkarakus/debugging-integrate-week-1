// fill in the blanks

console.log("--- loading: opposite day");

function oppositeDayHandler() {
  "use strict";
  debugger;

  // read inputs from user
  const showTheNumber = confirm(`do you want to see a random number?`);

  // before moving on ... type check!
  if (typeof showTheNumber !== "boolean") {
    throw new TypeError();
  }

  // perform core logic
  const oppositeDay = showTheNumber;
  const message = oppositeDay ? 100 * Math.random() : "as you wish.  good day!";

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log("\n--- opposite day ---");
  console.log("showTheNumber:", typeof showTheNumber, "\n", showTheNumber);
  console.log("oppositeDay:", typeof oppositeDay, "\n", oppositeDay);
  console.log("message:", typeof message, "\n", message);
}

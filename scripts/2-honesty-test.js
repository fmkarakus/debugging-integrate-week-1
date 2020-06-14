// fill in the blanks

console.log("--- loading: honesty test");

function honestyTestHandler() {
  "use strict";
  debugger;

  // read inputs from user
  const userString = prompt(`Please enter something:`);

  const confirmation = confirm(
    `Did you enter something? \nyes: "ok" \nno: "cancel"`
  );

  // before moving on ... type check!
  if (typeof userString !== "string") {
    throw new TypeError();
  }
  if (typeof confirmation !== "boolean") {
    throw new TypeError();
  }

  // perform core logic
  const didEnterSomething = userString ? false : true;
  const isALiar = confirmation === didEnterSomething;
  const message = `You are a ${isALiar ? "liar" : "mensch"}!`;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log("\n--- honesty test ---");
  console.log("userString:", typeof userString, "\n", userString);
  console.log("confirmation:", typeof confirmation, "\n", confirmation);
  console.log("message:", typeof message, "\n", message);
}

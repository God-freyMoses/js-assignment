// =========================
// Question 3: Function + Logical Operators + Template Literals
// =========================
function greetingBot(name, isMorning) {
  // Uses logical operators:
  // If isMorning is true, first part is returned; otherwise fallback happens.
  let message =
    (isMorning && `Good morning, ${name}!`) ||
    `Hello, ${name}!`;

  return message;
}

console.log("\nQ3 Tests:");
console.log(greetingBot("Ayo", true));
console.log(greetingBot("Ayo", false));
console.log(greetingBot("Zainab", true));

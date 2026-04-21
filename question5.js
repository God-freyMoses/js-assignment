
// =========================
// Question 5: Spread + Pattern + While Loop
// =========================
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log("\nQ5 Combined array:", combined);

// Pattern printing using a for loop
// This prints a centered pyramid of stars (5 rows)
let rows = 5;
console.log("\nQ5 Pattern:");
for (let i = 1; i <= rows; i++) {
  let spaces = " ".repeat(rows - i);      // left padding
  let stars = "* ".repeat(i).trimEnd();  // stars with spaces between
  console.log(spaces + stars);
}

// While loop: print 10 down to 1
console.log("\nQ5 Countdown:");
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}
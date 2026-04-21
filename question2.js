// =========================
// Question 2: Type Conversion + Truthy/Falsy
// =========================
let input = "25";
let numberValue = Number(input); // converts "25" to 25
console.log("\nQ2 Converted number:", numberValue, "Type:", typeof numberValue);

let valuesToTest = [0, "", "hello", null, undefined, NaN];

for (let i = 0; i < valuesToTest.length; i++) {
  let v = valuesToTest[i];

  // if (v) means: "is v truthy?"
  if (v) {
    console.log("Q2 Value is TRUTHY:", v);
  } else {
    console.log("Q2 Value is FALSY:", v);
  }
}
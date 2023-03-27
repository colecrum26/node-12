// TODO: Import `maths.js`
const maths = require("./maths.js");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
operation = process.argv[2];
numOne = parseInt(process.argv[3]);
numTwo = parseInt(process.argv[4]);
// console.log(operation);
// console.log(numOne);
// console.log(numTwo);
// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
  case "sum":
    console.log("sum = " + maths.sum(numOne, numTwo));
    break;
  case "difference":
    console.log("difference = " + maths.difference(numOne, numTwo));
    break;
  case "product":
    console.log("product = " + maths.product(numOne, numTwo));
    break;
  case "quotient":
    console.log("quotient = " + maths.quotient(numOne, numTwo));
    break;
  default:
    console.log("Please check your input.");
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

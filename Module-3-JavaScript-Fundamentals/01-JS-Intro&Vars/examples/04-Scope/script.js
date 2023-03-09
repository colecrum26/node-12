// A variable declared in global scope is available to all functions
// var hello = "Hello"; 
// var num1 = 2;
// var num2 = 3;

// function sayHello() {
//   console.log(hello);
//   var sum = num1 + num2;
//   console.log(sum);
//   return sum;
// }

// var sayHelloAgain = function () {
//   console.log(hello);
//   return;
// };

// sayHello();
// sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () { 
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
// var shadow = "Hello";
//  console.log(shadow);

// // Logs "Hello"
// function sayWhat() {
//   console.log(shadow);
//   return;
// }

// //Logs "Goodbye"
// var sayWhatAgain = function () {
//   var shadow = "Goodbye";
//   console.log(shadow);   
// };

sayGoodbye();
sayGoodbyeAgain();
// sayWhat();
// sayWhatAgain();

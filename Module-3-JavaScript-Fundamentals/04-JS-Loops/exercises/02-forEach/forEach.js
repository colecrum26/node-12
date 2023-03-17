// Exercise 1
let arr1 = ["Andre", "Karl", "Rashida", "Olivia"];

// arr1.forEach((value) => {
//   // console.log(value);
// });

// Exercise 2

let arr2 = ["Bears", "Giraffes", "Penguins", "Meerkats"];

// arr2.forEach((value) => {
//   // console.log(value)
// });

// Exercise 3

// for (let bottlesOnTheWall = 99; bottlesOnTheWall <= 115; bottlesOnTheWall++){
//     if (bottlesOnTheWall) {
//       console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
//     } else {
//       console.log(`No more bottles of milk on the wall!`);
//     }
//   }

let arr3 = []
for(let i = 1; i <= 99; i++) {
  arr3.push(i)
};
arr1.reverse()
console.log(arr3);

arr3.forEach((value) => {
  console.log(value);
});

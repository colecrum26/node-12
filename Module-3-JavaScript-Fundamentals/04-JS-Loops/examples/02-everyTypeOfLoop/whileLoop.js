let base = parseInt(
  prompt("What number do you want to a multiplication table of?")
);

if (!base) {
    alert("you have not selected a number, we will make it 1")
  base = 1;
}

let range = parseInt(prompt("What number should I stop at?"));
if (!range) {
    alert("you have not selected a number, we will make it 10")
  range = 10;
}

let i = 1;

while (i <= range) {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
}

// for (let i =1; i<=range; i++){
//     console.log(`${base} x ${i} = ${base * i}`);
// }
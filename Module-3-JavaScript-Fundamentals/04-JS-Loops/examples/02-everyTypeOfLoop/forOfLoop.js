const array1 = ['a', 'b', 'c','d', 'e'];

for( let i =0; i<=2; i++){
    console.log(`this is a regular for loop ${array1[i]}`);
}

for (const element of array1) {
  console.log(`this is a for of loop ${element}`);
}
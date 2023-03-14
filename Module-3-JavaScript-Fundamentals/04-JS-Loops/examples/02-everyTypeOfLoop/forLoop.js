//Ex1
// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}


/* ----------------------------------------------------------------------------------------------------------------------- */
//Ex2
// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];
//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) {
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

/* ----------------------------------------------------------------------------------------------------------------------- */
//Ex3
// Creates an array containing names of five student in the class
var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// Logs length of the array
console.log(students.length);

// For loop starts at 0, runs while i is less than length of student array
// Increments by 1
for (var i = 0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
}


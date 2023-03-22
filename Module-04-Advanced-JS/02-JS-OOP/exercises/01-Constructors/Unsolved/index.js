// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
  this.name = name;
  this.tech = tech;
  // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
  this.introduction = () => {
    console.log(`Hello, my name is ${this.name} and I love ${this.tech}.`);
  };
}

// TODO: Create a new object using the 'Developer' constructor
const aj = new Developer("AJ", "JavaScript")
// TODO: Call the 'introduction()' method on the new object
aj.introduction();
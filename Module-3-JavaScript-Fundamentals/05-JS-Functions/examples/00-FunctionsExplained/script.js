//FUNCTIONS CAN BE:
// Stored in a variable
var myFunct = function(x){
    return x
}
myFunct();

// passed as arguments of a function
function hello(){
    console.log("hello");
}

function greeting(x){
    x();
}
greeting(hello);

// Returned from a function
function farewell(){
    console.log("byeeee");
}
function goodbye(){
    return farewell();
}
goodbye();

// Hold their own properties
function iHaveProps(){
    var y = 7;
    return y;
}

// Be stored in data structures
const myObj = {
  a: 2,
  b: 3,
  add: function (c, d) {
    console.log(c + d);
  },
};
myObj.add(myObj.a, myObj.b);

//FUNCTIONS AS VARIABLES OR DECLARED WITH FUNCTION KEY WORD
// ACT IN TWO DIFFERENT WAYS
// Invoke add before it is defined by declaration
add(1, 2); // 3

function add(a, b) {
  return a + b;
}

//Or invoke add before it is assigned to a variable
add(1, 2); // REFERENCE ERROR

const add = function (a, b) {
  return a + b;
};

let x = 1;

function sideEfx() {
  x = 3;
  //default return is undefined
}

//for the given input you get the expected output
function pureFx(param) {
  return param + 7;
}

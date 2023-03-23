var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

var foods = ["Apples", "Pizza", "Dumplings", "Cupcakes"];

let oL = document.createElement("ol");

// for (i = 0; i < foods.length; i++){
//     let item = document.createElement("li");
//     item.textContent = foods[i];
//     item.style.color = "white";
//     item.style.padding = "5px";
//     item.style.marginLeft = "35px";
//     oL.appendChild(item);
// }

let apple = String.fromCodePoint(0x1F34E);
let pizza = String.fromCodePoint(0x1F355);
let dumplings = String.fromCodePoint(0x1F95F);
let cupcakes = String.fromCodePoint(0x1F9C1);

li1.textContent = `${foods[0]} ${apple}`;
li2.textContent = `${foods[1]} ${pizza}`;
li3.textContent = `${foods[2]} ${dumplings}`;
li4.textContent = `${foods[3]} ${cupcakes}`;

liArr = [li1, li2, li3, li4];

for(let li of liArr){
    li.style.color = "white";
    li.style.padding = "5px";
    li.style.marginLeft = "35px";
oL.appendChild(li)}

li1.style.backgroundColor = "#666666";
li2.style.backgroundColor = "#777777";
li3.style.backgroundColor = "#888888";
li4.style.backgroundColor = "#999999";


favoriteEl.appendChild(oL);

oL.setAttribute("style", "background-color:#333333")
oL.style.padding = "20px";
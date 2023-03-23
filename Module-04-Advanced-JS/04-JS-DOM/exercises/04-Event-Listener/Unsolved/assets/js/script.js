var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Refactored Solution - by building outside, it becomes more dynamic
function setCounterText() {
  console.log(this);
  if (this == incrementEl){
    count++;
    countEl.textContent = count;
  } else {
    if (0 < count) {
      count--;
      countEl.textContent = count;
    }
  }
}

incrementEl.addEventListener("click", setCounterText);
decrementEl.addEventListener("click", setCounterText);

// My Solution
// TODO: Add event listener to increment button
// incrementEl.addEventListener("click", function setCounterText() {
//   count++;
//   countEl.textContent = count;
// })

// TODO: Add event listener to decrement button 
// decrementEl.addEventListener("click", function setCounterText(){
//   count--;
//   countEl.textContent = count;
//   if (count < 0){
//     count = 0;
//     // end;
//   }
// })
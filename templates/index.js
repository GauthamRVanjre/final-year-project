let outputContainer = document.getElementsByClassName("output-container");

let button = document.getElementsByClassName("btn");
let current = document.querySelector(".output").innerHTML;
let recommended = document.querySelectorAll(".output")[1].innerHTML;
let profit = document.querySelectorAll(".output")[2];

console.log("Hello World");
console.log(current);
console.log(recommended);

profit.innerHTML = ((recommended - current) / recommended) * 100;

// button.Evc("click", () => {
//   Console.log("Hello World");
// });

button[0].addEventListener("click", () => {
  console.log("Hello World");
});

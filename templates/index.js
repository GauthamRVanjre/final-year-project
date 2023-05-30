let outputContainer = document.getElementsByClassName("output-container");

let button = document.getElementsByClassName("btn");
let current = document.querySelector(".output").innerHTML;
let recommended = document.querySelectorAll(".output")[1].innerHTML;
let profit = document.querySelectorAll(".output")[2];
let yesButton = document.getElementById("flexRadioDefault1");
let noButton = document.getElementById("flexRadioDefault2");
let recommendedSelect = document.getElementById("recommendedSelect");
let radioBtn = document.getElementById("radioBtn-container");

profit.innerHTML = ((recommended - current) / recommended) * 100;

function togglePara() {
  if (yesButton.checked) {
    recommendedSelect.classList.remove("hidden");

    radioBtn.classList.add("hidden");
    console.log(radioBtn.classList);
  } else {
    recommendedSelect.classList.add("hidden");
    console.log("Hello World2");
  }
}

button[0].addEventListener("click", () => {
  console.log("Hello World");
});

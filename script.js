const ecuation = document.querySelector("span");
const buttons = document.querySelectorAll(".btn");
const fraternite = document.querySelector(".egalite");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].innerHTML === "C") {
      ecuation.innerHTML = "";
    } else {
      ecuation.innerHTML = ecuation.innerHTML + buttons[i].innerHTML;
    }
  });
}

fraternite.addEventListener("click", () => {
  if (ecuation.innerHTML !== "") {
    if (parseInt(ecuation.innerHTML[ecuation.innerHTML.length - 1])) {
      ecuation.innerHTML = eval(ecuation.innerHTML);
    } else {
      ecuation.innerHTML = "Error";
    }
  }
});

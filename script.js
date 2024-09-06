let inputbox = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach(function (element) {
  element.addEventListener("click", function (b) {
    if (b.target.innerText == "=") {
      string = String(eval(string));
      inputbox.value = string;
    } else if (b.target.innerText == "AC") {
      string = "";
      inputbox.value = string;
    } else if (b.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1);
      inputbox.value = string;
    } else {
      string += b.target.innerText;
      inputbox.value = string;
    }
  });
});

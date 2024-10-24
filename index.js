//First input, button,then display

let values = document.getElementById("myinput");
let button = document.getElementById("btns");
let List = document.getElementById("lists");
let Eraser = document.getElementById("clear");

button.addEventListener("click", () => {
  let inputValue = values.value;
  let listitem = document.createElement("li");
  listitem.textContent = inputValue;
  List.appendChild(listitem);
  values.value = "";
});

Eraser.addEventListener("click", () => {
  List.innerHTML = "";
});

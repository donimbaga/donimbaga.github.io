
var btn = document.getElementById("btn");
btn.addEventListener("click", shownhide);

function shownhide() {
  var x = document.getElementById("email");
  x.classList.toggle("hide");
}

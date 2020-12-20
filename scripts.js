
var btn = document.getElementById("btn");
btn.addEventListener("click", shownhide);

function shownhide() {
  var el1 = document.getElementById("btn");
  el1.innerHTML = "donibrysonimbaga@gmail.com";

  var fakeInput = document.createElement("input");
  fakeInput.value = el1.textContent;
  document.body.appendChild(fakeInput);

  fakeInput.select();
  document.execCommand("copy", false);

  fakeInput.remove();
}

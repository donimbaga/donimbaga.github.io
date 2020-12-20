
var btn = document.getElementById("btn");
btn.addEventListener("click", shownhide);

function shownhide() {
  var btn = document.getElementById("btn");
  btn.innerHTML = "donibrysonimbaga@gmail.com";

  var fakeInput = document.createElement("input");
  fakeInput.value = btn.textContent;
  document.body.appendChild(fakeInput);

  fakeInput.select();
  document.execCommand("copy", false);
  fakeInput.remove();
}

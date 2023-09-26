const btn = document.getElementById("btn");

btn.addEventListener("mouseover", function (e) {
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");
});

const btn = document.getElementById("btn");
const root = document.getElementById("root");
console.log(root);

btn.addEventListener("click", function (e) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let black = Math.floor(Math.random() * 255);

  root.style.backgroundColor = `rgb(${red}, ${green}, ${black})`;
});

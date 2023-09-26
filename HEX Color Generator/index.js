window.onload = () => {
  main();
};

function main() {
  const btn = document.getElementById("btn");
  const root = document.getElementById("root");
  const output = document.getElementById("input");

  btn.addEventListener("click", function (e) {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = bgColor;

    output.value = bgColor;
  });
}

function generateHEXColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let black = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${black.toString(16)}`;
}

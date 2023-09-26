/*
    Requirements:
    -------------
      1. Generate Hex color and change the the background color.
      2. Display the HEX code in the UI.
      3. Copy the the HEX color code by clicking a 'copy button'.

*/

window.onload = () => {
  main();
};

function main() {
  const changeBtn = document.getElementById("btn");
  const copyBtn = document.getElementById("copy-btn");
  const root = document.getElementById("root");
  const output = document.getElementById("input");

  changeBtn.addEventListener("click", function (e) {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function (e) {
    window.navigator.clipboard.writeText(output.value);
  });
}

function generateHEXColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let black = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${black.toString(16)}`;
}

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

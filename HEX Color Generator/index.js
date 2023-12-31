/*
    Requirements:
    -------------
      1. Generate Hex color and change the the background color.
      2. Display the HEX code in the UI.
      3. Copy the the HEX color code by clicking a 'copy button'.
      4. Show a toast message when copied.
      5. Change the BG by typing HEX code in the input field.

*/

// ---------------------------------------------------------------->>

// Onload method applied here to help the auto browser reload.
window.onload = () => {
  main();
};

function main() {
  const changeBtn = document.getElementById("btn");
  const copyBtn = document.getElementById("copy-btn");
  const root = document.getElementById("root");
  const output = document.getElementById("input");

  // Change the BG color with random order.
  changeBtn.addEventListener("click", function (e) {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = `#${bgColor}`;
    output.value = bgColor.toUpperCase();
  });

  //  HEX color code copied by the help of browser navigator.
  copyBtn.addEventListener("click", function (e) {
    window.navigator.clipboard.writeText(output.value);

    if (output.value && output.value !== 6 && isValidHEX(output.value)) {
      generateToastMsg(`#${output.value} copied`);
    } else {
      alert("invalid HEX color code");
    }
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();

      if (color && isValidHEX(color)) {
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// Random HEX color code generator function.
function generateHEXColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let black = Math.floor(Math.random() * 255);

  return `${red.toString(16)}${green.toString(16)}${black.toString(16)}`;
}

// Toast message function
function generateToastMsg(msg) {
  let msgDiv = document.createElement("div");
  msgDiv.innerText = msg;
  msgDiv.className = "toast__msg";

  document.body.appendChild(msgDiv);

  setTimeout(() => {
    msgDiv.remove();
  }, 3000);
}

/**
 *
 * @param {string} color
 * @returns
 */
// Change the BG by typing HEX code in the input field.
function isValidHEX(color) {
  if (color.length !== 6) return false;
  // if (color[0] !== "#") return false;
  // color = color.substring(1);

  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

const container = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color-picker");
const rgbButton = document.getElementById("rgb-button");
const sizeSlider = document.getElementById("size-slider");
const resetButton = document.getElementById("reset-button");
let sizeDisplayer = document.getElementById("size-displayer");
let colorDisplayer = document.getElementById("color-displayer");
let selectedColor = "black";
const DEFAULT_SIZE = 14;
let size = DEFAULT_SIZE;
let isDragging = false;
let rgbMode = false;

function createGrid(value) {
  for (let i = 0; i < value * value; i++) {
    let gridItem = document.createElement("div");
    const itemWidth = 100 / value;
    gridItem.style.width = `${itemWidth}%`;
    gridItem.style.border = "1px solid rgba(0, 0, 0, 0.3)";

    container.appendChild(gridItem);
  }
}
container.addEventListener("mousemove", (event) => {
  if (event.target != container) {
    if (event.target && event.target.nodeName === "DIV") {
      if (!isDragging) return true;
      else {
        if (rgbMode) {
          event.target.style.backgroundColor = generateRandomRgb();
        } else {
          event.target.style.backgroundColor = selectedColor;
        }
      }
    }
  }
});

function generateRandomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function rgbModeFunction() {
  rgbMode = !rgbMode;
  if (rgbMode) {
    rgbButton.style.color = "white";
    rgbButton.style.backgroundColor = "black";
  } else {
    rgbButton.style.color = "";
    rgbButton.style.backgroundColor = "";
  }
}
function replaceContainer() {
  container.replaceChildren();
  sizeDisplayer.textContent = `${size}x${size}`;
  createGrid(size);
}
function resetContainer() {
  colorPicker.value = "#000000";
  size = DEFAULT_SIZE;
  rgbMode = false;
  sizeSlider.value = size;
  colorDisplayer.textContent = "#000000";
}
container.addEventListener("mousemove", (event) => {
  const target = event.target;

  if (target === container) return;
  if (target.nodeName !== "DIV") return;
  if (!isDragging) return;

  target.style.backgroundColor = rgbMode ? generateRandomRgb() : selectedColor;
});
rgbButton.addEventListener("click", rgbModeFunction);
colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  colorDisplayer.textContent = selectedColor;
});
sizeSlider.addEventListener("input", (event) => {
  size = event.target.value;
  replaceContainer();
});
clearButton.addEventListener("click", () => {
  replaceContainer();
});
resetButton.addEventListener("click", () => {
  resetContainer();
  replaceContainer();
});
container.addEventListener("mousedown", () => {
  isDragging = true;
});
container.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
  }
});

createGrid(DEFAULT_SIZE);

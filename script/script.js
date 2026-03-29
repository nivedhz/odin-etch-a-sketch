const container = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color-picker");
const rgbButton = document.getElementById("rgb-button");
const sizeSlider = document.getElementById("size-slider");
const resetButton = document.getElementById("reset-button");
let sizeDisplayer = document.getElementById("size-displayer");
let colorDisplayer = document.getElementById("color-displayer");
const randomColors = ["black", "red", "aqua", "azure", "blue", "pink", "peru"];
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

    gridItem.addEventListener("mousemove", () => {
      if (isDragging) {
        if (rgbMode) {
          gridItem.style.backgroundColor = generateRandomRgb();
        } else {
          gridItem.style.backgroundColor = selectedColor;
        }
      }
    });
    container.appendChild(gridItem);
  }
}

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
rgbButton.addEventListener("click", rgbModeFunction);
colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  colorDisplayer.textContent = selectedColor;
});
sizeSlider.addEventListener("input", (event) => {
  size = event.target.value;
  sizeDisplayer.textContent = `${size}x${size}`;
  container.innerHTML = "";
  createGrid(size);
});
clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  sizeDisplayer.textContent = `${size}x${size}`;
  createGrid(size);
});
resetButton.addEventListener("click", () => {
  container.innerHTML = "";
  colorPicker.value = "#000000";
  size = DEFAULT_SIZE;
  rgbMode = false;
  sizeSlider.value = size;
  sizeDisplayer.textContent = `${size}x${size}`;
  colorDisplayer.textContent = "#000000";
  createGrid(size);
});
window.addEventListener("mousedown", () => {
  isDragging = true;
});
window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
  }
});

createGrid(14);

const container = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color-picker");
const rgbButton = document.getElementById("rgb-button");
const randomColors = ["black", "red", "aqua", "azure", "blue", "pink", "peru"];
let colorDisplayer = document.getElementById("color-displayer");
let selectedColor = "black";

colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
  colorDisplayer.textContent = selectedColor;
});
clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(14);
});
let isDragging = false;
window.addEventListener("mousedown", () => {
  isDragging = true;
});
window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
  }
});

function createGrid(value) {
  for (let i = 0; i < value * value; i++) {
    let gridItem = document.createElement("div");
    const itemWidth = 100 / value;
    gridItem.style.width = `${itemWidth}%`;
    gridItem.style.border = "1px solid rgba(0, 0, 0, 0.3)";

    rgbButton.addEventListener("click", () => {
      selectedColor =
        randomColors[Math.floor(Math.random() * randomColors.length - 1)];
    });
    gridItem.addEventListener("mousemove", () => {
      if (isDragging) {
        gridItem.style.backgroundColor = selectedColor;
      }
    });
    container.appendChild(gridItem);
  }
}

createGrid(14);

function createGrids(value) {
  const container = document.getElementById("grid-container");

  for (let i = 0; i < value * value; i++) {
    const gridItem = document.createElement("div");
    const itemWidth = 100 / value;
    gridItem.style.width = `${itemWidth}%`;
    gridItem.style.border = "1px solid rgba(0, 0, 0, 0.3)";

    container.appendChild(gridItem);
  }
}

createGrids(14);
console.log();

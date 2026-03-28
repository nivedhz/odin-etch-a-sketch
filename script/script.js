function createGrids(row, coloumn) {
  const container = document.getElementById("grid-container");

  for (let i = 0; i < row * coloumn; i++) {
    const gridItem = document.createElement("div");
    const itemWidth = 100 / coloumn;
    gridItem.style.width = `${itemWidth}%`;

    container.appendChild(gridItem);
  }
}

createGrids(128, 128);

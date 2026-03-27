// function createGrids(row, coloumn) {
//   const container = document.getElementById("grid-container")
//   container.style.display = "flex"
//   container.style.flexWrap = "wrap"
//   container.style.border = "3px solid black"
//   container.style.borderRadius = "3px"
//
//   for (let i = 0; i < row * coloumn; i++) {
//     const gridItem = document.createElement("div")
//     const itemWidth = 100 / coloumn
//     gridItem.style.width = `${itemWidth}%`
//     gridItem.style.border = "1px solid rgba(0, 0, 0, 0.5)"
//     gridItem.style.boxSizing = "border-box"
//     gridItem.style.textAlign = "center"
//
//     container.appendChild(gridItem)
//   }
// }
//
//
// createGrids(16, 16)

/*
document.getElementById("grid").addEventListener(
    "mouseover", function () {
        document.getElementById("grid").style.background = "black";
    }
)
document.getElementById("grid").addEventListener(
    "mouseout", function () {
        document.getElementById("grid").style.background = "white";
    }
)
*/

const gridContainer = document.getElementById("grid-container");
let size = 16;

for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.style.border = "1px solid black";
    gridElement.style.background = "white";
    gridContainer.appendChild(gridElement);
}

gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
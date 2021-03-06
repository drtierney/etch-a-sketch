const gridContainer = document.getElementById("grid-container");

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function addGridElements(size){
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.style.border = "1px solid black";
        gridElement.style.background = "white";
        gridElement.addEventListener("mouseover", changeColor)
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e) {
    e.target.style.background = "black";
}

function defaultGrid() {
    setGridSize(16);
    addGridElements(16);
}

window.addEventListener("load", defaultGrid());
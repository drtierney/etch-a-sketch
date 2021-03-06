const gridContainer = document.getElementById("grid-container");
const changeSizeBtn = document.getElementById("change-size-btn");

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

function changeGridSize() {
    let newSize = prompt("Enter new size");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number from 1-64 range");
        changeSize();
        } else {
        clearGrid();
        setGridSize(newSize);
        addGridElements(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}

window.addEventListener("load", defaultGrid);
changeSizeBtn.addEventListener("click", changeGridSize);
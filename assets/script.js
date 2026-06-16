const DEBUG = true;
const GRID_SZ_DEFAULT = 16;
const GRID_SUB_CONTAINER = "gridSubContainer";

function debug(...args) {
    if (DEBUG === true) {
        console.log(...args);
    }
}


function createGrid(gridSize) {
    const gridContainer = document.querySelector("#gridContainer");
    const gridSubContainer = document.createElement("div");
    const gridArray = [];

    for (let row = 0; row < gridSize; row++) {
        let rowElements = [];
        for (let column = 0; column < gridSize; column++) {
          
            let columnElement = document.createElement('div');
            
            columnElement.classList.add('gridCSS')
            rowElements.push(columnElement);
            gridSubContainer.appendChild(columnElement)
        
        }
        debug(rowElements);
    }
    gridSubContainer.classList.add(GRID_SUB_CONTAINER);
    gridSubContainer.setAttribute('id', GRID_SUB_CONTAINER);

    gridContainer.appendChild(gridSubContainer);
}

createGrid(GRID_SZ_DEFAULT);
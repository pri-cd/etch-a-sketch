const DEFAULT_GD_SIZE = 16;
const ERR = -1;
const DEBUG = true;
const SUBC_ID = "subContainer";

function debug(...args) {
    if (DEBUG === true) {
        console.log(...args);
    }
}

function generateGrid(gridSize) {

    const mainContainer = document.querySelector("#mainContainer");
    const subContainer = document.createElement("div");

    for (let row = 0; row < gridSize; row++) {
        let rowContainer = document.createElement('div');

        for (let column = 0; column < gridSize; column++) {
            let element = document.createElement('div');
            element.classList.add('gridElementCSS');

            rowContainer.appendChild(element);
        }
        rowContainer.classList.add('rowContainerCSS')
        subContainer.appendChild(rowContainer);
    }

    subContainer.setAttribute("id", SUBC_ID);
    subContainer.classList.add("subContainerCSS");
    mainContainer.appendChild(subContainer);
}

function eraseGrid() {

    const subContainer = document.querySelector("#" + SUBC_ID);

    if (subContainer)
    {
        subContainer.remove();
    }
}

function getInputGridValue() {
    const inputGridSize = document.querySelector('#changeGridSize');
    const inputVal = inputGridSize.value;

    debug(inputVal);
    if (!inputVal) {
        debug("Invalid Value Received: " + inputVal);
        return ERR;
    }

    if (inputVal > 40 || inputVal < 1) {
        debug("Invalid Size!");
        return ERR;
    }

    return Number.parseInt(inputVal);
}

function registerChangeGridListener() {
    const changeGridButton = document.querySelector('#changeGridButton');

    changeGridButton.addEventListener('click', (event) => {

        let newGridValue = getInputGridValue();

        if (newGridValue !== ERR)
        {
            eraseGrid();
            generateGrid(newGridValue);
        }
    });
}

generateGrid(DEFAULT_GD_SIZE);
registerChangeGridListener();
const DEFAULT_GD_SIZE = 16;
const ERR = -1;
const DEBUG = true;
const SUBC_ID = "subContainer";
const GE_CSS = "gridElementCSS";
const MAX_HOVER = 500;


let userInput = 0;

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
    userInput = 0;
    if (subContainer) {
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

        if (newGridValue !== ERR) {
            eraseGrid();
            generateGrid(newGridValue);
            debug("Generating grid for: ", newGridValue);
            registerHoverElementListeners();
        }
        else
        {
            debug("Not Generating Grid!");
        }
    });
}

function getRandomColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let code = "#";

    for (let hexLen = 0; hexLen < 6; hexLen++)
    {
        code += hexArray[(Math.floor(Math.random() * 16))];
    }
    debug('Random Color', code);
    return code;
}

function registerHoverElementListeners() {

    const subContainer = document.querySelector("#" + SUBC_ID);
    debug(subContainer);

    subContainer.addEventListener('mouseover', (event) => {
        if (userInput < MAX_HOVER) {
            userInput++;
            let className = event.target.className;
            if (className === GE_CSS) {
                event.target.style.backgroundColor = getRandomColor();
            }
        }
        else {
            debug("Reached Limit: " + MAX_HOVER);
        }
    });

}

generateGrid(DEFAULT_GD_SIZE);
registerChangeGridListener();
registerHoverElementListeners();
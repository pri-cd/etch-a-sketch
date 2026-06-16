const DEFAULT_GD_SIZE = 16;






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
    
    subContainer.setAttribute("id", "subContainer");
    subContainer.classList.add("subContainerCSS");
    mainContainer.appendChild(subContainer);
}


generateGrid(DEFAULT_GD_SIZE);
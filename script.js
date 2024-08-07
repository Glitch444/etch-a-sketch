// Dropdown menu
const dropDownMenuContainer = document.querySelector(".dropdown-menu-container")
const dropdownMenuItems = document.querySelectorAll(".dropdown-menu-items");

dropDownMenuContainer.addEventListener("mouseover", show);  
dropDownMenuContainer.addEventListener("mouseout", hide);

function show() {
    dropdownMenuItems.forEach(item => item.style.display = "flex");
}
function hide() {
    dropdownMenuItems.forEach(item => item.style.display = "none");
}


const container = document.getElementById("sketch-container");
const resetBtn = document.getElementById("reset-btn");
const changeGridBtn = document.getElementById("change-grid-btn");
const randomColourBtn = document.getElementById("random-colour-btn");

let userInputOut = 16;
let isMouseDown = false;
let randomColourBtnDown = false;
let colour;

document.addEventListener("DOMContentLoaded", makeGrid(userInputOut));

function makeGrid(userInputOut) {
    container.innerHTML = "";

    for (let i = 0; i < userInputOut; i++) {
        const newDivRow = document.createElement("div");
        newDivRow.classList.add("rows");
        container.appendChild(newDivRow);

        for (let i = 0; i < userInputOut; i++) {
            const newDivColumn = document.createElement("div");
            newDivColumn.classList.add("columns");
            newDivRow.appendChild(newDivColumn);         
            
        };
    };
};

// draw
container.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("columns")) {
        isMouseDown = true;
        colorBox(event.target);       
    }       
});

container.addEventListener("mouseover", function (event) {
    if (isMouseDown && event.target.classList.contains("columns")) {
        colorBox(event.target);
    }                
});

document.addEventListener("mouseup", function () {
    isMouseDown = false;
   
});

function colorBox (element){
    if (isMouseDown && randomColourBtnDown === true){

        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
        
        element.style.backgroundColor = rndCol;
    } 


    else if (isMouseDown &&  colour === "blue") {
        element.style.backgroundColor = "blue"
    }

    else if (isMouseDown &&  colour === "green") {
        element.style.backgroundColor = "green"
    }

    else if (isMouseDown &&  colour === "yellow") {
        element.style.backgroundColor = "yellow"
    }
    else if (isMouseDown &&  colour === "purple") {
        element.style.backgroundColor = "purple"
    }
    else if (isMouseDown &&  colour === "red") {
        element.style.backgroundColor = "red"
    }
    
    else if (isMouseDown) {
        element.style.backgroundColor = "red";
    }

}

// change colour
dropdownMenuItems.forEach(item => {
    item.addEventListener("click", changeColour)
});

function changeColour (event){
    colour = event.target.textContent;
}



// random colour
function random (number) {
    return Math.floor(Math.random()*number) +1;
}

randomColourBtn.addEventListener("change", function () {

    if(this.checked) {
        randomColourBtnDown = true;
    }
    else {
        randomColourBtnDown = false;
    }
})

// clear drawing
resetBtn.addEventListener("mousedown", function () {
    const allColumns = document.querySelectorAll(".columns");
    allColumns.forEach(column => column.style.backgroundColor = "white");
});

// change number of boxes in grid
changeGridBtn.addEventListener ("click", function () {
    let userInputIn = prompt("select a number between 1 and 100");
    userInputOut = userInputIn; 
    container.innerHTML = "";
    makeGrid(userInputOut);
});




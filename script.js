const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");
const changeGridBtn = document.getElementById("change-grid-btn");
let userInputOut = 16;

container.addEventListener("DOMContentLoaded", makeGrid(userInputOut));

function makeGrid(userInputOut) {
    for (let i = 0; i < userInputOut; i++) {
        const newDivRow = document.createElement("div");
        newDivRow.classList.add("rows");
        container.appendChild(newDivRow);

        for (let i = 0; i < userInputOut; i++) {
            const newDivColumn = document.createElement("div");
            newDivColumn.classList.add("columns");
            newDivRow.appendChild(newDivColumn);

            newDivColumn.addEventListener("mousedown", function () {
            newDivColumn.style.backgroundColor = "red";

                resetBtn.addEventListener("mousedown", function () {
                newDivColumn.style.backgroundColor = "white";
                });
            });
        };
    };
};

changeGridBtn.addEventListener ("click", function () {
    let userInputIn = prompt("select a number between 1 and 100");
    userInputOut = userInputIn; 
    container.innerHTML = "";
    makeGrid(userInputOut);
});

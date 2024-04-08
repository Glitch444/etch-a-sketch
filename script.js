const container = document.getElementById("container")


document.addEventListener("DOMContentLoaded", makeRows);


function makeRows() {
    for (let i = 0; i < 16; i++) {
        const newDivRow = document.createElement("div")
        newDivRow.classList.add("rows")
        container.appendChild(newDivRow);

        for(let i = 0; i<16; i++) {
        const newDivColumn = document.createElement("div")
        newDivColumn.classList.add("columns")
        newDivRow.appendChild(newDivColumn) 
        }
    }
}


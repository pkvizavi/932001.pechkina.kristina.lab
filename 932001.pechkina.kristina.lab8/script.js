const table = document.querySelector("tbody");
const firstRow = document.querySelector(".info-row");
const addBtn = document.querySelector("#add");
const saveBtn = document.querySelector("#save");
const p = document.querySelector("#result");

AddButtonAction(firstRow);
const rowPropotype = firstRow.cloneNode(true);

addBtn.addEventListener("click", () => {
    let newrow = rowPropotype.cloneNode(true);
    table.appendChild(newrow);
    AddButtonAction(newrow);
})

saveBtn.addEventListener("click", () => {
    let resultDict = {};
    const rows = table.querySelectorAll(".info-row");
    rows.forEach((row) => {
        resultDict[row.querySelector("#name").value] = row.querySelector("#number").value;
    })
    p.innerText = JSON.stringify(resultDict);
})

function AddButtonAction(row) {
    if (row.classList.contains("info-row")) {
        row.querySelector("#up").addEventListener("click", (event) => MoveRowUp(event))
        row.querySelector("#down").addEventListener("click", (event) => MoveRowDown(event))
        row.querySelector("#delete").addEventListener("click", (event) => DeleteRow(event))
    } else {
        console.log("Elemetn in not an info-row");
    }
}

function MoveRowUp(event) {
    let row = event.target.parentElement.parentElement;
    if (row.previousElementSibling) {
        table.insertBefore(row, row.previousElementSibling);
    }

}

function MoveRowDown(event) {
    let row = event.target.parentElement.parentElement;
    if (row.nextElementSibling) {
        table.insertBefore(row, row.nextElementSibling.nextElementSibling);
    }

}

function DeleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.remove();
}
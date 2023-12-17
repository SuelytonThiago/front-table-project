const multiplicationForm = document.querySelector("#multiplication-form");
const multiplier = document.querySelector("#multiplier");
const multiplied = document.querySelector("#multiplied");

const table = document.querySelector("#table");

const createTable = (number, multiplicatorNumber) =>{
    table.innerHTML = "";

    for(i = 1;i <= multiplicatorNumber;i++){
        const result = number * i;

        const template = 
        `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template,"text/html");

        const row = htmlTemplate.querySelector(".row");

        table.appendChild(row);
    }
}

multiplicationForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    const multiplicationNumber = +multiplier.value;
    const multiplicatorNumber = +multiplied.value;

    if(!multiplicationNumber || !multiplicatorNumber)return;
    

    createTable(multiplicationNumber,multiplicatorNumber)

});
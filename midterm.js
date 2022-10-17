const table = document.querySelector("#table");
const amountField = document.querySelector("#loan-amount");
const interestField = document.querySelector("#interest-rate");
const amountValue = document.getElementById("loan-amount").value;
const interestRateValue = document.getElementById("interest-rate").value;
const interestTotalValue = amountValue*(interestRateValue/100);
const enterButton = document.querySelector("#enter-data");
const amountArray = [];
const interestRateArray = [];
const interestTotalArray = [];

const createTableElements = (amount, rateP, rateT) => {
    const rowElem = document.createElement("tr")
    const element1 = document.createElement("th");
    const element2 = document.createElement("th");
    const element3 = document.createElement("th");
    const textNode1 = document.createTextNode(amount);
    const textNode2 = document.createTextNode(rateP);
    const textNode3 = document.createTextNode(rateT);
    element1.appendChild(textNode1);
    element2.appendChild(textNode2);
    element3.appendChild(textNode3);
    rowElem.append(element1);
    rowElem.append(element2);
    rowElem.append(element3);
    return rowElem;
};



const testIt = () =>{
    //AddToArrays
    amountArray.push(amountValue);
    interestRateArray.push(interestRateValue);
    interestTotalArray.push(interestTotalValue);
    //AddToTable
    table.appendChild(createTableElements(amountValue, interestRateValue, interestTotalValue));
    //Testing
    console.log(amountValue);
    console.log("Amount Array: " + amountArray);
    console.log("interestRateArray: " + interestRateArray);
    console.log("interestTotalArray: " + interestTotalArray);

    return
}







enterButton.addEventListener("click", testIt);


// Make a Calculation Function DONE
// Event Handler to add Entry Field Values to arrays DONE
// Create
// Data Validation for Entry Fields
//
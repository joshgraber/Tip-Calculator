//Targetting the calculate button
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const tipSpan = document.getElementById("tip-amount")
const totalSpan = document.getElementById("total");


//Calculate
function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const tipAmount = billValue *(tipValue / 100)
    const totalValue = billValue *(1 + tipValue / 100);
    
    tipSpan.innerText = tipAmount.toFixed(2);
    totalSpan.innerText = totalValue.toFixed(2);
}

//Trigers the calculate total function
btnEl.addEventListener("click", calculateTotal);

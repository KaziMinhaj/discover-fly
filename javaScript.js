
// [FIRST CLASS]
// first class add button
const firstClassAddBtn = document.getElementById("firstClass-plusBtn");
firstClassAddBtn.addEventListener("click", function () {
    addTicket("firstClass-inputValue", 150);
    // calcSubtotal();

});
// first class minus button
const firstClassMinusBtn = document.getElementById("firstClass-minusBtn");
firstClassMinusBtn.addEventListener("click", function () {
    removeTicket("firstClass-inputValue", 150);
});


//Economic class
//economic class add button
const economicClassAddBtn = document.getElementById("economicClass-plusBtn");
economicClassAddBtn.addEventListener("click", function () {
    addTicket("economicClass-inputValue", 100);
});
// economic class minus button
const economicClassMinusBtn = document.getElementById("economicClass-minusBtn");
economicClassMinusBtn.addEventListener("click", function () {
    removeTicket("economicClass-inputValue", 100);
});

function addTicket(InputValueId, price) {
    const inputValueString = document.getElementById(InputValueId).value;
    const inputValue = parseFloat(inputValueString);
    const newInputValue = inputValue + 1;
    document.getElementById(InputValueId).value = newInputValue;

    //calc subtotal
    calcSubtotal("subtotal", price, 1);
}
function removeTicket(InputValueId, price) {
    const inputValueString = document.getElementById(InputValueId).value;
    const inputValue = parseFloat(inputValueString);
    const newInputValue = inputValue - 1;
    document.getElementById(InputValueId).value = newInputValue;
    //calc subtotal
    calcSubtotal("subtotal", price, -1);
}

function calcSubtotal(subtotalId, price, sign) {
    const subtotalString = document.getElementById(subtotalId).innerText;
    const subtotal = parseFloat(subtotalString);
    const newSubtotal = subtotal + (sign * price);
    document.getElementById(subtotalId).innerText = newSubtotal;

    //calc vat

}
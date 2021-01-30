
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

    if (inputValue > 0) {
        const newInputValue = inputValue - 1;
        document.getElementById(InputValueId).value = newInputValue;
        //calc subtotal
        calcSubtotal("subtotal", price, -1);
    }
    else {
        alert("Ticket amount can not be negative.");
    }

}

function calcSubtotal(subtotalId, price, sign) {
    const subtotalString = document.getElementById(subtotalId).innerText;
    const subtotal = parseFloat(subtotalString);
    const newSubtotal = subtotal + (sign * price);
    document.getElementById(subtotalId).innerText = newSubtotal;

    //calc vat
    calcVat(newSubtotal, price, sign);


}
function calcVat(newSubtotal, price, sign) {
    const vatString = document.getElementById("vat").innerText;
    const vat = parseFloat(vatString);
    const newVat = vat + (sign * price * 0.1);
    document.getElementById("vat").innerText = newVat;

    //calc total
    calcTotal(newSubtotal, newVat);
}

function calcTotal(newSubtotal, newVat) {
    const totalString = document.getElementById("total").innerText;
    const total = parseFloat(totalString);
    const newTotal = newSubtotal + newVat;
    document.getElementById("total").innerText = newTotal;
}

//book now
// login event handler
const bookNowBtn = document.getElementById('bookNow');
bookNowBtn.addEventListener("click", function () {
    const loginArea = document.getElementById('booking-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("confirmation-area");
    transactionArea.style.display = "block";
});
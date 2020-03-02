function getSize() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}
// function getCrust() {
//     var selectedCrust = document.getElementById("crust").value;
//     return parseInt(selectedCrust);
// }
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}
function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
// function getDrink() {
//     var selectedToppings = document.getElementById("typeOfPizza").value;
//     return parseInt(selectedToppings);
// }
function getTotalAmount() {
    let totalAmount = (getSize() + getToppings() + getCrust()) * getQuantity();
    if (totalAmount && getSize() > 0 && getQuantity()) {
        alert("You have Ordered" + " " + getQuantity("") + " pizza." + "" + " The Total Amount is kshs " + (totalAmount) + "" + " Thank you for your order,we hope to serve you again.");
    } else {
        return false
    }
    return totalAmount;
}
function output() {
    let ourAmount = getTotalAmount()
    if (ourAmount && totalAmount && getSize() > 0) {
        prompt('locale');
        alert("Thanks for buying from us")
        alert('Your delivery cost is Sh.100');
    } else if (getSize() < 1) {
        alert("Enter pizza size")
    } else {
        alert('Hope to see you again')
    }

}







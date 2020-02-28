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
    var selectedQuantity = document.getElementById("crust").value;
    return parseInt(selectedQuantity);
}
function getDrink() {
    var selectedToppings = document.getElementById("typeOfPizza").value;
    return parseInt(selectedToppings);
}
function getTotalAmount() {
    let totalAmount = (getSize() + getToppings() + getDrink()) * getQuantity();
    if(totalAmount){
        alert("You have Ordered" + " " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order,we hope to serve you again.");
    } else {
        return false
    }
    return totalAmount;
}
function output(){
    let ourAmount = getTotalAmount()
    if(ourAmount){
        prompt('locale');
        alert("Thanks")
    }else{
        alert("see yah")
    }
       
}







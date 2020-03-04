 
function myFunction(){
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    if (name == "" || email == ""||message == ""){
        alert("enter your name, email and message");
    }
    else
    alert(name + " thank you for contacting us . we have recieved your message");
};

var sizePrice = [1200, 900, 650]
var deliverPrices = [0, 300];
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTop = $('#top').val();

        var pizzaQty = parseInt($('#qty').val());

        var pizzaPick = parseInt($('#pick').val());


        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];

        
        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
        alert("your bill is: " + newTotal.finalTotal() + ".You will receive your pizza in the next few minutes");
        }else{
            if(pizzaPick===2){
                prompt("Enter where you want your pizza to be delivered");
                alert("Your order has been received and it will be delivered. Continue to see your order details");
                alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal() + ".You pizza will be delevered in the next 30minutes");
            }
        }

    });





});

function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Order.prototype.fullOrder = function () {
    return this.type + " with the topping of " + this.topping + " and " + this.crust + " as crust.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};
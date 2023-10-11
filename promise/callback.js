let cart = ["pen", "pencil", "bag"]; 

// callback hell
// pyramid of doom
// inversion of control
createOrder(cart, function(orderID){
    proceedToPayment(orderID, function(payID){
        confirmOrder(payID, function(confirmID){
            console.log(confirmID);
        });
    });
});

// setTimeout(function(){
//     console.log("callback in executed");
// },3000)

// console.log("after timeout");
alert("CityBusService");
confirm("City Bus Avalaible");
let CName = prompt("What is your Name?");
let Age = prompt("What is your age?");
if (Age >= 60) {
    let AaCard = prompt("Do you have a Aadhar Card?  (Yes/No)");
    if (AaCard == "Yes" || "YES") {
        confirm("you are eligible for free bus service");
    }
    else {
        confirm("Without Aadhar Card you are not eligible for free bus service");
        confirm("If you want to buy the ticket you can buy it from the bus station.");
    }
}

else {
    confirm("You can travel bus service by buying ticket offline from bus station ");

}
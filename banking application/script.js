let balance = 5000;
let withdraw = 5500;

try{
    if (withdraw > balance)
    {
        throw "Insufficient Balance";
    }
    else {
        balance-=withdraw;
        console.log("Transaction is successful. Remaing Balance is " + balance)
    }
}

catch(err)
{
    console.log("Error : " + err)
}
finally{
    console.log("Thank you , Visit again")
}

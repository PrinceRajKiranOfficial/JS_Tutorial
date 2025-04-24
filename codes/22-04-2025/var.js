//Global Variable
let gloVar = "I am global Variable";
console.log(gloVar);

function myFunction() {
    console.log(gloVar);
}
myFunction()//Function Call
console.log(gloVar);


//local Variable
function hi() {

    let locVar = "I am local Variable";
    console.log(locVar);
}
hi();
// console.log(locVar);//reference error

// block scope
// {
//     let blockScope ="I am block scope";
//     console.log(blockScope);
// }
// console.log(blockScope);//Error Not defined

{
    var blockScope ="I am block scope";
    console.log(blockScope);
}
console.log(blockScope);// No Error 

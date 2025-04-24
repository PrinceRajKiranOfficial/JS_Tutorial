//unary operator
let a = 10;
a++;
++a;
console.log(a)//12

let b = 20;
--b;
b--;
console.log(b);//18



let c =7;
console.log(++c + --c -  ++c)
console.log(c)

let d = 7
// ((--d + --d) + (d-- + --d) * (++d + d++) - (--d + --d))
// ((6 + 5)+ (5 + 3) * (4 + 4) - (4 + 3))
// (11 + 8*8 - 7)
// (11+64-7)
// (68)

console.log(d);//3
console.log((--d + --d) + (d-- + --d) * (++d + d++) - (--d + --d));//68



//Arithmetic Operator
console.log(10+10);//20
console.log(50-10);//40
console.log(10*10);//100
console.log(10/2);//5 
console.log(10%2);//0
console.log(10**10);//10000000000(** represents power)




// ADDING STRINGS AND NUMBER

let x= 5+5;
console.log(x);//10
let y =  "5" + 5;
console.log(y);//55
let z = "Hello" + "5";
console.log(z);//Hello5
console.log(x,y,z)//10 '55' 'Hello5'

let x1 = 16 + 4 + "vovo"
console.log(x1)//20volvo





//toString METHOD
let za =100;
console.log(za);//100
console.log(typeof(za));//number
console.log(za.toString());//100
console.log(typeof(za.toString()));//string




// toExponential() METHOD
// toExponential() returns a string with a number rounded and written using exponential notation

// example:
let f = 9.656;
console.log(f.toExponential(0));//1e+1
console.log(f.toExponential(2));//9.66e+0
console.log(f.toExponential(4));//9.6560e+0
console.log(f.toExponential(5));//9.65600e+0


// toFixed()
// to fixed() returns a string, with a number written with a specified number of decimals

// example
    let m = 8.658;
    console.log(m.toFixed(0));//"9"
    console.log(m.toFixed(2));//"8.66"
    console.log(m.toFixed(4));//"8.6580"




// toPrecision()
// toPrecision() returns a string , with a number written with a specified length
// example
let p = 9.656
console.log(p.toPrecision());//"9.656"
console.log(p.toPrecision(2));//"9.7"
console.log(p.toPrecision(4));//"9.656"
console.log(p.toPrecision(6));//"9.65600"




//Compund Assignment with Augmented arithmetic operation
var l =5;
var o =3;
var n =8;
l= l+10;//l+=10
o= o-2;//o-=2
n= n*5;//n*=5
l=l/5;//l/=5


// shift operator
//     1.left
//     2.right


var q=100,r=4;
console.log("q<<r: "+ (q<<r)); //q<<r:32 //(8*2*2) { multiply by 2, left shift}
console.log("q>>r: "+ (q>>r));  //  q>>r:2   // (8/2/2) [ divide by 2, right shift]


//  Relational operators
        console.log(NaN=NaN)//false
        console.log(NaN==NaN)//false
        console.log(+0 == -0)//true
        console.log(+0 === -0)//true



// Type Coercion
console.log(+0 === -0) //true
console.log(Object.is(+0,-0))//false
console.log(NaN==NaN)//false
console.log(Object.is(NaN,NaN))//true



// Bitwise operator
    var a1=8,b1=2;
    console.log('a1&b1 : ' + (a1&b1));//"a & b: "0'
    console.log('a1|b1 : ' + (a1|b1));// "a |b": "10"
    console.log('a1^b1 : ' + (a1^b1));//"a^b": "10"
    console.log('~a1   : ' + (~a1))  ;//'~a' : "-9"



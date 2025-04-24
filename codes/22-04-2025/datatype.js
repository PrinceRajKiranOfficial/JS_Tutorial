//Data Type


//Number
var a = 23;
    console.log(a);
    console.log(typeof (a));
var b = 40.53;
    console.log(b);
    console.log(typeof (b));
var c = 98;
    console.log(c);
    console.log(typeof (c));
var d = 0xf;//hex dec value
    console.log(d);
    console.log(typeof (d));
var e = 1.5e12;//exponential number
    console.log(e);
    console.log(typeof (e));
var f = 100_00_000;
    console.log(f);
    console.log(typeof (f));



//string
let s = 'hello'
    console.log(s);
    console.log(typeof (s));

var sname = "prince";
    console.log(sname + " is 22 years old")

//back ticks
console.log(`${sname} 
is
a
22
years
old`)


let clg = "Parul"
console.log(`${sname}
is
a
student
in
${clg}`);



//boolean
var isValid=true;
console.log(isValid);
console.log(typeof(isValid));


//undefined
let z;
console.log(z);//output=undefined
console.log(typeof(z));//output=undefined

//null
let x=null;
console.log(x);//output=null
console.log(typeof(x));//output=object

//bigint
let k =12345789134567897413123456124651122222222313212416545213241654561321561021263412121542312341564321n;//n indicates bigint
console.log(k);
console.log(typeof(k));

let i=123n;//n indicates bigint
console.log(i);
console.log(typeof(i));

// Symbol
let sym=Symbol("prince");
let sym1=Symbol("prince");
console.log(sym==sym1);//false(bcz symbol is always unique)



// DIFFERENCE BETWEEN UDEFINED AND NULL
console.log(undefined==null);//true (values are same)

console.log(undefined===null);//false(datatype different)

//length method
let fname = "prince raj kiran";
console.log(fname.length);//16


// strings as object

// let q= "prince";  // x is string
// let r = new String("prince"); // y is object
// console.log(q==r);//Output= true


// let q = new String("prince"); // y is object
// let r = new String("prince"); // y is object
// console.log(q==r);//Output= false



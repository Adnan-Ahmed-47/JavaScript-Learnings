// console.log("5" - 2);  // 3
// console.log("5" + 2);  // "52"
// console.log(null == undefined); // true
// console.log(typeof null);  // object
// console.log(typeof NaN);  // number
// console.log(Symbol("a") == Symbol("a"));  // false


// Easy (10 questions)
let age = 25;
// console.log(age);

const country = "India";
// country = "Australia";
// console.log(country)

// console.log(typeof "JavaScript")

let strValue = "250";
let convertedValue = Number(strValue);

// console.log(convertedValue)
// console.log(typeof convertedValue)


let num = 0;
let boolValue = Boolean(num);
// console.log(boolValue);

let originalVal = "Adnan";
let convVal = Boolean(originalVal);
// console.log(convVal);

// console.log(10 > 5);
// console.log("5" > 3);
// console.log(5 != 5);


let num1 = 10;
// console.log(-num1);
// ---------------------------------------
// Medium level

// console.log("10" + 5);  // "105"
// console.log(10 + "5");  // "105"
// console.log("10" + 5 + 2);  // "1052"
// console.log(10 + 5 + "2");  // "152"
// console.log(null > 0);  // false
// console.log(null >= 0); // true
// console.log(undefined == 0); // false

let str = "500"
let convValue = Number(str) *2;
// console.log(convValue)

// ---------------------------------------
// Hard level

// console.log("20" - 5); // 15
// console.log("20" + 5 - 2); // 203
// console.log(Number(null));  // 0
// console.log(Boolean(Number(""))); // false
// console.log(Boolean(Number("0"))); // false

// let x = 5;
// let y = x++;
// console.log(x, y);  // x-6, y-5

// let aa = 5;
// let bb = ++aa;
// console.log(aa, bb);  // a-6, b-6

// console.log(typeof 12345678901234567890n); // bigint

const id1 = Symbol("abc");
const id2 = Symbol("abc");
// console.log(id1 === id2); // false

// let a = "10";
// let b = Number(a);
// let c = b++;
// console.log(a, b, c);  // a-"10", b-11, c-10





// The Biggest Misconception

// Many beginners think:

// x++ means "increase x by 1".

// That's only half true.

// The increment operator actually does TWO things:

// Increase the variable by 1.
// Return a value.

// The difference between prefix and postfix is which value gets returned.




// ----------------------------------------------
// Prefix/Postfix Questions

// let xx = 1;
// xx++;
// console.log(xx);  // 2


// let xx = 1;
// ++xx;
// console.log(xx);  //2

// let xx = 10;
// console.log(xx++);  //10

// let xx = 10;
// console.log(++xx); //11


// let a = 5;
// let b = a++;
// console.log(a, b); // a-6, b-5

// let a = 5;
// let b = ++a;
// console.log(a, b); // a-6, b-6

// let x = 10;
// console.log(x++); // 10 
// console.log(x);  // 11

// let x = 10;
// console.log(++x); //11
// console.log(x);  //11


// let a = 2;
// let b = a++;
// let c = ++a;
// console.log(a, b, c);  // a-4, b-2, c-4

// let a = 10;
// let b = ++a;
// let c = b++;
// console.log(a, b, c); // a-11, b-12, c-11


// let x = 5;
// let y = x++ + ++x;
// console.log(x, y); // x-7, y-12


// let a = 3;
// let b = ++a + a++;
// console.log(a, b); // a-5, b-8

// let x = 2;
// let y = x++ + x++ + ++x;
// console.log(x, y); // x-5, y-10

// let a = 1;  //3 
// let b = a++; //1
// let c = ++a; //3
// let d = b + c + a;
// console.log(a, b, c, d); // a-3, b-1, c-3, d-7


// let x = Number("5"); //7
// let y = x++; //5
// let z = ++x; //7
// console.log(x, y, z);  // x-7, y-5, z-7
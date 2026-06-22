// +++++++++++++++++++++ EASY QUESTIONS ++++++++++++++++++++++++++
let name = "Adnan";
const age = 25;

// console.log(typeof "Hello")

const bigNum = 100n;
// console.log(typeof bigNum)

const num = "200";
const conVal = Number(num);
// console.log(conVal)
// console.log(typeof conVal)

const num1 = 0;
const conVal1 = Boolean(num1)
// console.log(conVal1)

const num2 = true;
const conVal2 = String(num2)
// console.log(typeof conVal2)

// console.log(10>5)

// console.log("20">5)

// console.log(-25);

const myDate = new Date();
// console.log(myDate)

// console.log(myDate.getMonth() + 1)

// console.log("JavaScript".length)

const word = "Programming";
// console.log(word.charAt(4))

const str1 = "Hello World"
// console.log(str1.replace(" ", "_"));

// const max = 10;
// const min = 1;
// console.log(Math.floor(Math.random() * (max - min + 1) + min))


// +++++++++++++++++++++ MEDIUM QUESTIONS ++++++++++++++++++++++++++
const num3 = 25;
// console.log(num3.toFixed(2))

const num4 = 123.4567;
// console.log(num4.toPrecision(4))

const balance = 100000;
// console.log(balance.toLocaleString("en-IN"))

// console.log(myDate.getDay())

const str2 = "JavaScript";
// console.log(str2.includes("Script"))


const str3 = "a,b,c,d"
// console.log(str3.split(","))


// +++++++++++++++++++++ HARD QUESTIONS ++++++++++++++++++++++++++

let a = "10";
let b = Number(a);
let c = b++;
// console.log(a, b, c);


// console.log(Number(null));  // 0

// console.log(Number(undefined)); // NaN

// console.log(Boolean(Number(""))); // false

// console.log("5" - 2 + "1");

// let x = 2;
// let y = x++ + ++x;
// console.log(x, y);


// let x = 3;
// let y = ++x + x++ + ++x;
// console.log(x, y); // 6, 14

const min = 20;
const max = 50;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));


// const newDate = new Date();
// console.log(Math.floor(Date.now()/1000))

const str4 = "  JavaScript  ";
// console.log(str4.toUpperCase().trim())
// console.log(str4.trim().toUpperCase())

const str5 = "JavaScript";
const getIndex = str5.indexOf('Script')
// console.log(getIndex)
// console.log(str5.slice(4))


const str6 = "I Love JavaScript";
// console.log(str6.replaceAll(" ", "-"))


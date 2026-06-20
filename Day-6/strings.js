const name = "Adnan";
const repoValue = 50;

// console.log(name + repoValue + " Value"); // Outdated syntax

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoValue}`);


// WE can also declare string in this manner, you can use one more syntax, in which we use new keyword, so we use javascript objects there. String and then in constructor we give the stringname. So, when you type this and access str, we get the length and all its methods we can use for strings. So, here string is an object
const str = new String("adnanahmed");
// console.log(str);


// Few methods of string:

// console.log(str[0])
// console.log(str.__proto__);


// console.log(str.length);
// console.log(str.toUpperCase());  //lekin isne hamari original string ko change nai kiya hai, kyunki ye call by value hota hai aur copy ka reference deta hai

// console.log(str.charAt(2));
// console.log(str.indexOf('n'));


// console.log(str.substring(0, 4));

// console.log(str.slice(-10, 4));



const newStringOne = "    adnan    ";
console.log(newStringOne.trim());


const strOne = "adnan ahmed";
console.log(strOne.replace(" ", "-"))

console.log(strOne.includes('adnan'))


// split -> I want the string to be converted into array based on -
const gameName = new String("hitesh-hc-com")

console.log(gameName.split("-"))



const score = 400;

const balance = new Number(100);

// console.log(score)
// console.log(balance.toString().length)
// console.log(balance.toFixed(1))

const otherNumber = 23.8966
const otherNumber1 = 123.8966

// console.log(otherNumber.toPrecision(3)) // 23.9
// console.log(otherNumber1.toPrecision(3)) // 124


const hundreds = 1000000;

// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++

// console.log(Math.PI);

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.7))
// console.log(Math.sqrt(49))
// console.log(Math.min(4, 3, 6, 8))
// console.log(Math.max(4, 3, 6, 8))


// Math.random() 
// -> Math.random() ki hamesha value aati hai 0 aur 1 ke beech mein, 0 bhi hosakti hai aur 1 bhi hosakti hai.
// -> Kuch cases aise hote hain jisme hame 1 se 6 tak values hone hote hain jaise ke dice ke game mein. So, we multiply by 10 in that case, so that once number comes before decimal point and we get the required result

// console.log(Math.random())  // 0.08261650517177332 or 0.6972262662885014

// console.log(Math.random() *10) // 7.547241754436795  or 0.9045035249981592
// NOTE: As 0.03435342253 can also come with *10, because we may get the value as 0.0235235 as well, so to avoid this case, we do add +1 to the expression. So, now if 0.9045035249981592 comes, then it will be added as 1.9045035249981592

// console.log((Math.random()*10) + 1) // It gives values from 1 to 9, so now the minimum value will be 1, it won't be 0 now. 

// Now we have one trick to get the values from min to max as given below:
const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




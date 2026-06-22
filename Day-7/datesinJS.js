// Whatever dates we declare will be calculated from January 1, 1970, The dates usually gets calculated in milliseconds.

// Dates 

let myDate = new Date();

// console.log(myDate)  // 2026-06-22T00:33:46.173Z
// console.log(myDate.toString()) // Mon Jun 22 2026 06:03:46 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Mon Jun 22 2026
// console.log(myDate.toISOString()) // 2026-06-22T00:36:40.995Z
// console.log(myDate.toLocaleString()) // 22/6/2026, 6:06:40 am
// console.log(myDate.toUTCString()) // Mon, 22 Jun 2026 00:36:40 GMT

// console.log(typeof myDate); // object
// console.log(typeof myDate.toISOString()); //string

// Customized date
// let myCreatedDate = new Date(2023, 0, 15);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 15, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// NOTE: In JS, the month starts from 0, I mean 0 is January. But sometimes, if you want specific format to be fetched in date, then it works as usual from 1, such as newDate("2023-01-21").

// let myCreatedDate = new Date("2023-00-24"); // Invalid date
let myCreatedDate = new Date("2023-01-24"); 
// console.log(myCreatedDate.toLocaleString())

// ------------------------
// NOTE: we get a long string which is a milliseconds from 1, Jan, 1970 to uptil now. So, if you want the milliseconds string from any particular date, then we use getTime() as given below:
let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// To get the date in seconds instead of milliseconds
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth() + 1) // as it gets started from 0
// console.log(newDate.getDay())


// `${newDate.getDay() and the time is }`

// to customize the format more, internationalization.
// console.log(newDate.toLocaleString("default", {
//     weekday: "long"
// }))

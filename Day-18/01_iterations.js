// loops

// for loop
// let index = 0; // a variable is declared first
// index < array.length; // there will be condition check
// index++  // then increment/decrement happens

// NOTE: Once the condition is checked, we go inside the loop and executes all the things inside and then goes to index++ to increment the declared value.

// for (let index = 0; index <= 10; index++) { 
//     const element = index;
//     if(element === 5) {
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

// console.log(element) // element is not defined, bcoz its getting accessed outside the scope

// ------------------------------------------------------------------------------------------------

// We have printed the tables here from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`)
    for(j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value ${j} and Outer loop ${i}`)
        // console.log(i + ' * ' + j + ' = ' + i*j)
    }
    
}

// ------------------------------------------------------------------------------------------------
let myArray = ['flash', 'batman', 'superman']
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

// ------------------------------------------------------------------------------------------------

// lets learn about some keywords, like in loops we have printed 10 values etc, but its not a must that we need to print all the values, like for example we get the 1000 books data from database, but we need to print only 5 or 10 books data in a page and then print another on other page etc.

// So here comes break & continue keywords as discussed below:

// break and continue

// break -> to break any control flow, we use break keyword
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`Value of i is ${index}`) 
}
// OUTPUT:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


// continue -> it says ignore(ek baar maaf kardo and iterate normally)
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of i is ${index}`) 
}
// OUTPUT
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20
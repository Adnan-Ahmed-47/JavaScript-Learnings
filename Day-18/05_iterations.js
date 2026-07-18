// forEach loops

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// callback function means, its asking us to give one function guiding what to do.
// callback function doesn't have name

// coding.forEach( function name() {} ) // callback doesn't have function name
// coding.forEach( function (item) {} ) // you may give paramaeters here

// using normal function
coding.forEach( function (val) {
    // console.log(val)
} )  // but good practice is to use arrow function while using forEach

// using arrow function
coding.forEach((item) => {
    // console.log(item)
})


// one more interesting thing is:
function printMe(item) { //printMe takes an item and prints whatever we give, you may also pass on this function as well
    // console.log(item)
}

coding.forEach(printMe) //passing on function to forEach, make sure just give reference of the function, not the execution.


// ----------------------------------------------------------------------------

//  we only don't get item, we also get index, array, item in this function
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})


// ----------------------------------------------------------------------------
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})
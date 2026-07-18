// forin loop

// As forof loops weren't working for objects, it was working on maps but not on objects.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {   
    // console.log(key) // we get all the keys here.
    // console.log(myObject[key]) // to get the key values.

    // console.log(`${key} shortcut is for ${myObject[key]}`)
}


// -----------------------------------------------------------------
// Can we use forin for arrays as well?

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key)  // we get keys here as well, array keys are  0 1 2 3 4 
    // console.log(programming[key]) // to get the values
    
}

// ----------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)   
    
}

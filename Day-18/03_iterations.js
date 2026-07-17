// The loops which we're going to learn in this file, is array specific loops
// for of 

const arr = [1, 2, 3, 4, 5]
// you may use anything in place of i, also there is no need of increment, length of arr etc.
for (const i of arr) { // konse object, string, array pe loop lagana hai
    // console.log(i)
}

const greetings = "Hello world!"
for (const char of greetings) {
    // console.log(`Each char is ${char}`)
}


// Maps -> The Map object holds key-value pairs and remembers the original insertion order of the keys, whereas objects don't remember the insertion order of keys.
// we get only unique values in map, not duplicate values here.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)
// OUTPUT:
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


for (const key of map) {
    // console.log(key)
}
// OUTPUT
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
// but I want alag alag values



for (const [key, value] of map) { //destructure hogaya
    // console.log(key, ': ', value)
}
// OUTPUT
// IN :  India
// USA :  United States of America
// Fr :  France




const myObject = {
    'game1': "NFS",
    'game2': 'Spiderman'
}

// for (const [element] of myObject) {
//     console.log(element) // myObject is not iterable, there are another methods to iterate an objects.
// }


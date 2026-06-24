const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // array inside array.

// console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) // If you want to access the flash in the array.

// -> This is problematic, so we use concat
// -------------------------------------------------------------------------------------------
// NOTE: .push pushes the value in the existing array, whereas .concat returns a new array.

// const allHeros = marvel_heros.concat(dc_heros); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// console.log(allHeros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// -> we have one more thing which is easy, rather than using concat we use spread operator.

// -------------------------------------------------------------------------------------------
//  Spread Operator: think of it like, you have a kaanch ka glass and you are dropping it, it gets spread.

const all_new_heros = [...marvel_heros, ...dc_heros] // both the  arrays are spread, now it is not an array, all its elements gets spread

// console.log(all_new_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// NOTE: More than concat, we prefer spread operator.

// -------------------------------------------------------------------------------------------

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // you may give exact number in place of infinity as well, I mean the depth of the subarray value. 
// console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// NOTE: .flat -> returns a new array with all sub-array elements concatenated, it basically gives everything in a single array


// -------------------------------------------------------------------------------------------

// Whenever you are doing data scraping i.e., whenever you select a data from the webpage, most of the times it comes in multiple different formats, such as nodelist, objects, string etc. But we want array, so we can loop it into array. So, in that case you may use array in this manner: Array.from("slkdf")

console.log(Array.isArray("Adnan"))  // false 
// whatever the values you give using from, such as objects, strings etc, it converts it into array:
console.log(Array.from("Adnan")) // [ 'A', 'd', 'n', 'a', 'n' ]   

// Interesting
// console.log(Array.from({name: "Adnan"})) // This gives an empty array [], because it directly is not able to convert, we need to mention it whether we need to make the keys array or value array


// Lets suppose we have few values, if you want multiple variable or arrays into an array, we use of keyword.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]


// So, I recommend you to learn more about isArray, of , from etc.


// Array.of()

// ↓

// Creates array

// from values

// ---------------------

// Array.from()

// ↓

// Converts

// existing thing

// into array



// Array.from()

// Suppose

// "Adnan"

// ↓

// Convert into array

// ↓

// ["A","d","n","a","n"]

// Think

// FROM

// something

// ↓

// TO

// Array
// Array.isArray()

// Checks

// Is this actually an array?

// Example

// Array.isArray([1,2])

// ↓

// true
// Array.isArray("Hello")

// ↓

// false
// Array.of()

// Suppose

// let a=10

// let b=20

// let c=30

// Instead of

// [10,20,30]

// You can write

// Array.of(a,b,c)

// Output

// [10,20,30]



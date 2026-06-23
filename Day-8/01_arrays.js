// Arrays 

// -> Arrays are declared in square brackets, and inside square brackets, we call it as elements, elements can be number/string/boolean or any other datatype. Basically, it can be multiple types of elements in an array.
// -> Array is an object, its a datatype in which we can store a collection of multiple items under a single variable.
// -> JS arrays are resizable(we can also add more elements once after the declaration as well) and contains a mix of datatypes

// -> To access an array, we simply access it by using [], such as myArr[2], we get the 3rd element in this case.

// Shallow Copy and Deep copy:

// Shallow Copy:
// -> Whenever you perform copy operation on arrays in JS, it creates a shallow copies.
// -> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those to the source object from which the copy was made. Basically, whatever we change, it gets changed in the original array as well, the heap memory concept which we already covered.

// Deep Copy:
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object



const myArr = [0, 1, 2, 3, 4, 5]
// const myArr = [0, 1, 2, 3, 4, 5, true, "Adnan"]
const myHeros = ["spiderman", "batman", "superman"];

// Another way to declare an array
const myArr2 = new Array(1, 2, 3, 4); // automatically [] are added
// NOTE: When u inspect this in the console, we get two Prototypes in it. will discuss this later.

// console.log(myArr[0])

// +++++++++++++++++++ Array Methods ++++++++++++++++++++++++++++++++++++++++++++++

// the element is added to the last when we use push, and when we use pop, the last element will be removed from an array.
// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr)

// unshift inserts the value at the start of the array, I mean at 0th index.
// The drawback with unshift is, all the other elements indexing will be changed and shifted
// myArr.unshift(9)

// shift is like a pop, but it removes the first element from the array.
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9)) // false
// console.log(myArr.indexOf(9)) // -1

// .join adds all the elements of an array into a string, separated by specified separator.
// const newArr = myArr.join();
// console.log(myArr) //  [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr) // 0,1,2,3,4,5 and type will be string


// +++++++++++ slice & splice +++++++++++++

// -> The main difference b/w slice and splice is:
    //   i) In slice, the last range is not included, but in splice it is included.
    //  ii) In slice, we get a portion of array from original, but in splice, it manipulates the original array, I mean the portion of the splice will be removed from the array, and the remainging elements will be displayed.
    
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)
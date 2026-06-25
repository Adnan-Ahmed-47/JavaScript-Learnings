// JavaScript Interview Questions

// console.log(typeof []);  // object
// console.log(Array.isArray([])); // true
// console.log(Array.from("123")); // ["1", "2", "3"]
// console.log(Array.of(1,2,3)); // [1, 2, 3]
// console.log([1,2]+[3,4]); // 1, 23, 4

// ################### EASY QUESTIONS ++++++++++++++++++++++++++++++++++++

const fruits_array = ['Pomegranate', 'Watermelon', 'Orange', 'Grapes', 'Guava'];
// console.log(fruits_array)

// console.log(fruits_array[2]);

// fruits_array.push("Mango")
// console.log(fruits_array)

// fruits_array.pop()
// console.log(fruits_array)

// fruits_array.unshift('Apple')
// console.log(fruits_array)

// fruits_array.shift()
// console.log(fruits_array)

// console.log(fruits_array.includes('Banana'))

// console.log(fruits_array.indexOf("Orange"))

// const arr = [1, 2, 3]
// console.log(fruits_array.join())

// const newDate = new Date();
// console.log(newDate)

// const str = "500";
// console.log(Number(str));

// const bigNum = 100n;
// console.log(typeof bigNum)

// const min = 1;
// const max = 10;
// console.log(Math.floor(Math.random() * (max-min+1) + min))

// const str1 = "JavaScript"
// console.log(str1.toUpperCase())

// const str2 = "   Hello   "
// console.log(str2.trim())

// ################### MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++

// let arr = [1,2,3,4,5];
// console.log(arr.slice(1,4)); // [ 2, 3, 4 ]
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// let arr=[1,2,3,4,5];
// console.log(arr.splice(1,3)); // [2, 3, 4]
// console.log(arr); // [1, 5]

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// console.log(arr1.concat(arr2)); // [ 1, 2, 3, 4, 5, 6 ]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const newArr = [1,[2,[3,4]]];
// console.log(newArr.flat(Infinity))

// console.log(Array.from("Adnan")) // [ 'A', 'd', 'n', 'a', 'n' ]
// console.log(Array.of("Adnan"))  // [ 'Adnan' ]

// console.log(Array.isArray("Hello"));

// console.log(Array.from("123")); // [ '1', '2', '3' ]

// let x = 5;
// let y = x++;
// console.log(x, y);

// const min = 50;
// const max = 100;
// console.log(Math.floor(Math.random() * (max-min+1) + min))

// ################### HARD QUESTIONS ++++++++++++++++++++++++++++++++++++

// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// let arr = [1,2,3];
// let copy = arr.slice();
// console.log(copy) // [1, 2, 3]
// copy.push(4);
// console.log(arr); // [1, 2, 3]
// console.log(copy); // [1, 2, 3, 4]

// let arr = [1,2,3];
// let copy = arr;
// console.log(copy) // [1, 2, 3]
// copy.push(4);
// console.log(arr); // [1, 2, 3, 4]
// console.log(copy); // [1, 2, 3, 4]

// console.log(Array.from("Hello").join("-"));  // "H-e-l-l-o"

// console.log(Array.of(...Array.from("JS"))); // ["J", "S"] first the Array.from("JS") will execute and give ['J', 'S'] and then the ... will give "J", "S", and then again ARray.of will give new array with ['J', 'S']

// const min = 100;
// const max = 200;
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

// let arr = [10,20,30];
// arr.unshift(5);
// arr.shift();
// console.log(arr); // [10, 20, 30]

// let arr = ["a","b"];
// arr.push(["c","d"]);
// console.log(arr[2][1]); // d

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [7, 8, 9]
// console.log([...arr1, ...arr2, ...arr3]) //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const str = "Frontend Developer";
// console.log(str.split(" ")) // [ 'Frontend', 'Developer' ]

// const str = "  JavaScript  "
// console.log(str.trim().toUpperCase())

// console.log(typeof []); // object
// console.log(Array.isArray([])); // true

// let original = [1,2];
// let another = original;
// another.pop();
// another.push(5);
// console.log(original); // [1, 5]
// console.log(another); // [1, 5]
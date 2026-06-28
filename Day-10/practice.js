// ################### EASY QUESTIONS ++++++++++++++++++++++++++++++++++++

// const student = {
//     name: "Adnan",
//     age: 23,
//     city: "Hyderabad",
//     course: "JavaScript"
// };
// console.log(student)

// console.log(student.city)

// student.course = "React JS"
// console.log(student)

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// console.log(fruits[2])

fruits.push("Kiwi")
// console.log(fruits)

fruits.pop();
// console.log(fruits)

// console.log(fruits.includes("Banana"))

const str = "250"
const numVal = Number(str);
// console.log(numVal)
// console.log(typeof numVal)

const boolVal = false;
const convStr = String(boolVal)
// console.log(convStr)
// console.log(typeof convStr)

// const min = 1;
// const max = 10;
// console.log(Math.floor(Math.random() * (max-min+1) + min))

const newDate = new Date();
// console.log(newDate)
// console.log(newDate.getFullYear()) // 2026
// console.log(newDate.getMonth() + 1) // 6
// console.log(newDate.toLocaleDateString('en-US', { month: 'long' }))  // June
// console.log(newDate.getDate()) // 27

// console.log("JavaScript".toUpperCase())

// console.log("Frontend Developer".replace("Developer", "Engineer"))

// const arr1 = ["React","Node"];
// const arr2 = ["MongoDB","Express"];
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const obj = {
//     name: "Adnan",
//     age: 25
// }
// console.log(obj.hasOwnProperty("age"))

// ################### MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++

// let a = "20";
// let b = Number(a);
// console.log(typeof b); // number

// let arr=[1,2,3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// let arr=[1,2,3,4,5];
// console.log(arr.slice(1,4)); // [2, 3, 4]
// console.log(arr); // [1, 2, 3, 4, 5]

// let arr=[1,2,3,4,5];
// console.log(arr.splice(1,4)); // [2, 3, 4, 5]
// console.log(arr); // [1]

// push() -> the item will be added in the array in the last element, changes occur in the original array.
// concat() -> with this also we will be able to combine the two arrays. Returns a new array.
// spread () -> this is the modern JS method which is used mostly to combine two arrays into one. Returns a new array.

// let user1={
// name:"Adnan"
// }
// let user2=user1;
// user2.name="Ahmed";
// console.log(user1.name); // "Ahmed"

// let x=5;
// let y=x++;
// console.log(x,y); // 6, 5

// let x=5;
// let y=++x;
// console.log(x,y); // 6, 6

// const car = {
//     brand: "Toyota",
//     model: "TQA54764",
//     price: 1500000
// }
// console.log(Object.keys(car) )

// console.log(Object.values(car))

// const text = "Hello World";
// console.log(text.split(' ')) // [ 'Hello', 'World' ]

// const arrVal = ["Hello","World"];
// console.log(arrVal.join(" ")); // Hello World

// const min = 50;
// const max = 100;
// console.log(Math.floor(Math.random() * (max-min+1) + min))

// console.log(Array.from("12345")); // ['1', '2', '3', '4', '5']


// ################### HARD QUESTIONS ++++++++++++++++++++++++++++++++++++

// let original=[10,20];
// let copy=original;
// copy.push(30);
// console.log(original); // [10, 20, 30]
// console.log(copy); // [10, 20, 30]

// let arr=[1,2,3]; // [1, 2, 3]
// let arr2=arr.slice(); // [1, 2, 3]
// arr2.push(4); 
// console.log(arr); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3, 4]

// const obj={
// name:"Adnan"
// }
// Object.freeze(obj);
// obj.name="Ahmed";
// console.log(obj); // {name: "Adnan"}

// const user={
// name:"Adnan",
// // greet: function() {
// //     return `Hello ${this.name}`
// // },
// greet(){
// return `Hello ${this.name}`
// }
// }
// console.log(user.greet());

// const user={
// name:"Adnan"
// }
// console.log(user["name"]); // "Adnan"
// console.log(user.name);  // "Adnan"

// const sym=Symbol("id");
// const obj={
// [sym]:123
// }
// console.log(obj[sym]);

// const obj1={
// a:1
// }
// const obj2={
// b:2
// }
// const obj3={
// ...obj1,
// ...obj2
// }
// console.log(obj3); // {a: 1, b: 2}

// const course={
// instructor:"Hitesh"
// }
// const{
// instructor
// }=course;
// console.log(instructor); // "Hitesh"

// console.log(Object.keys({a:1, b:2})); // ['a', 'b']

// console.log(Object.values({a:1, b:2})); // [1, 2]

// console.log(Object.entries({a:1, b:2})); // [['a', 1], ['b', 2]]

// const user={age:25}
// console.log(user.hasOwnProperty("age")); // true 
// console.log(user.hasOwnProperty("city")); // false

// console.log(typeof []); // object
// console.log(Array.isArray([])); // true

// console.log(Array.of(1,2,3)); // [1, 2, 3]
// console.log(Array.from("ABC")); // ['A', 'B', 'C']

const student = {
    name: "Adnan",
    marks: [90, 95, 85],
    city: "Hyderabad"
};
const anotherStudent = student;
anotherStudent.marks.push(100);
anotherStudent.city = "Bangalore";
console.log(student);  // { name: 'Adnan', marks: [ 90, 95, 85, 100 ], city: 'Bangalore' }
console.log(anotherStudent); // { name: 'Adnan', marks: [ 90, 95, 85, 100 ], city: 'Bangalore' }
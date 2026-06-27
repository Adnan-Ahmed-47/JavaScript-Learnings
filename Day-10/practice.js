// ################### EASY QUESTIONS ++++++++++++++++++++++++++++++++++++

const student = {
    name: "Adnan",
    age: 23,
    city: "Hyderabad",
    course: "JavaScript"
};
// console.log(student)

// console.log(student.city)

student.course = "React JS"
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

const min = 1;
const max = 10;
// console.log(Math.floor(Math.random() * (max-min+1) + min))

const newDate = new Date();
// console.log(newDate)
// console.log(newDate.getFullYear()) // 2026
// console.log(newDate.getMonth() + 1) // 6
// console.log(newDate.toLocaleDateString('en-US', { month: 'long' }))  // June
// console.log(newDate.getDate()) // 27

// console.log("JavaScript".toUpperCase())

// console.log("Frontend Developer".replace("Developer", "Engineer"))

const arr1 = ["React","Node"];
const arr2 = ["MongoDB","Express"];
const arr3 = [...arr1, ...arr2]
// console.log(arr3)

const obj = {
    name: "Adnan",
    age: 25
}
console.log(obj.hasOwnProperty("age"))



// ################### MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++
// ################### HARD QUESTIONS ++++++++++++++++++++++++++++++++++++
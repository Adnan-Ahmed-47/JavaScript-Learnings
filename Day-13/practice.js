// ++++++++++++++++++++++++++++ EASY QUESTIONS ++++++++++++++++++++++++++++++++++++++++

// function myName() {
//     console.log("Adnan")
// }
// myName()

// function addTwoNums(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNums(5, 5))

// function greet(value = "Guest") {
//     console.log(`Hello ${value}`)
// }
// greet()

// const multiplyTwoNums = (num1, num2) => {
//     return num1 * num2
// }
// let result = multiplyTwoNums(5, 5)
// console.log(result)

// const cities_array = ["Hyderabad", "Secunderabad", "Banglore", "Pune", "Goa"];
// console.log(cities_array[[3]])

// const car_obj = {
//     name: "Innova",
//     brand: "Toyota",
//     model: 2023,
// }
// console.log(car_obj.brand)

// const min = 1;
// const max = 50;
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

// const str = "123";
// let res = Number(str)
// console.log(res);
// console.log(typeof res);

// const val = true;
// let res = String(val)
// console.log(res);
// console.log(typeof res);

// const todaysDate = new Date();
// console.log(todaysDate.toLocaleDateString())

// const arr = [1, 2, 3, 4, 5]
// arr.push(6)
// console.log(arr)

// const obj = {
//     name: "Adnan",
//     age: 25,
//     qualification: "Computer Science Engineer",
//     job: "Front end Developer"
// }
// console.log(Object.keys(obj))

// const str = "JavaScript"
// console.log(str.length)

// const arr = [1, 2, 3, 4, 5]
// console.log("Array: ", arr)
// console.log(arr.slice(1, 3))
// console.log("Array after slice: ", arr)
// console.log(arr.splice(1, 3))
// console.log("Array after splice: ", arr)

// NOTE: the difference b/w slice and splice is: the slice makes changes in the copy, but the splice makes changes in the original array. ii) The slice will range one number before the end element index, but the splice will add the start and end index values also. iii) the slice will use the portion of elements and print, but the splice will cut that portion from the original array.

// ++++++++++++++++++++++++++++ MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++++++

// Parameter: The values given at the time of function definition is called parameters, its also called as placeholder.
// Argument: The values given at the time of function execution is called arguments, we basically pass actual values to the parameters.

// return: the return keyword returns a value and it gets saved, but not shown to the user.
// console.log(): this is used to show the value to the user, but it is not saved or returned.

// const userObj = {
//     name: "Adnan",
//     age: 25,
//     city: "Hyderabad"
// }
// function personDetails(obj) {
//     console.log(obj.name)
//     console.log(obj.city)
// }
// personDetails(userObj)

// const arr = [1, 2, 3, 4, 5, 234, 543]
// function readArrVal(array) {
//     let arrayLength = array.length;
//     return array[arrayLength - 1]
// }
// console.log(readArrVal(arr))

// function returnArray(...array) {
//     return array
// }
// console.log(returnArray(2, 4, 5, 243, 'Phone'))

// Global scope: the variable defined outside of the {} is called the global scope. The variable which is accessible everywhere is called global scope.
// Local scope: the variable defined inside of the {} is called the local scope. The local scope value cannot be accesses anywhere, it can only be accessed inside the scope

// function chai() {
//     let username = "Adnan"
//     console.log("Chai drank")

//     function aurCode() {
//         let teacher = "hitesh"
//         console.log(teacher)
//         console.log(username)
//     }

//     aurCode()
//     console.log(teacher)
// }
// chai()

// var should generally be avoided because it 
// function chai() {
//     var name = "Adnan"
// }
// if(true) {
//     var name = "Adnan Ahmed"
// }
// console.log(name)
// chai()

// const arrFunc = (num1, num2) => {
//     console.log(num1 + num2)
// }
// arrFunc(1,1)

// const arrFunc = () => {
//     return {name: "Adnan", age: 25}
// }
// console.log(arrFunc())

// Predict the output of calling a function before its declaration vs calling a function expression before assignment.
// chai()
// function chai() {
//     console.log("chai")
// }
// chaiAurCode()
// const chaiAurCode = function() {
//     console.log("Chai aur Code")
// }
// A function expression cannot be accessed before initialization

// If u want any function to run, immediately when the app starts, we use IIFE functions

// const obj1 = {name: "Adnan", age: 25}
// const obj2 = {username: "Mannan", userage: 24}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj1 = {username: "Adnan", userage: 25}
// const {username: name, userage} = obj1
// console.log(name, userage)

// ++++++++++++++++++++++++++++ HARD QUESTIONS ++++++++++++++++++++++++++++++++++++++++

// function double(num) {
//     let result = num * 2
//     return result
// }
// function getDoubledScore(score) {
//     return double(score)
// }
// let finalResult = getDoubledScore(5)
// console.log(finalResult)

// let a = 10;
// function test() {
//     let a = 20;
//     return a;
// }
// console.log(a); // 10
// console.log(test()); // 20

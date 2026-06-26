// singleton
// Object.create

// Two ways to declare an object, one is like literal and another is with constructor, there is also a concept of singleton. When you declare an object with constructor, the singleton object will be created, means it is a single object. But when you declare an object with another method, then multiple instances will be made for that object. There is no need of singleton now.
// ----------------------------------------------------------------------------------

// object literals
// There will be key and value in object.
// const JsUser = {
//     name: "Adnan",
//     age: 25,
//     location: "Hyderabad",
//     email: "adnan@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// Access an object:

// console.log(JsUser.email) // this is not the only way to access the object key
// console.log(JsUser[email]) // this gives error, bcoz, behind the scene, all the keys, such as name, age, location, email etc are treated as string. So we need to provide the key in strings as given below.
// console.log(JsUser["email"])

// ----------------------------------------------------------------------------------
// Why do you want to know these 2 ways of accessing objects, it is because:
// const JsUserTwo = {
//     name: "Adnan",
//     "full name": "Adnan Ahmed",
//     age: 25,
//     location: "Hyderabad",
//     email: "adnan@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUserTwo["full name"])  // there is no way that we access this key with the dot method, no chance.
// ----------------------------------------------------------------------------------

// If u want to declare a symbol in an object, or want to use the symbol as a key and print the value of symbol then:
const mySym = Symbol("key1") 

const JsUser = {
    name: "Adnan",
    "full name": "Adnan Ahmed",
    // mySym: "key1", // this is not a symbol, its just a string
    [mySym]: "key1",
    age: 25,
    location: "Hyderabad",
    email: "adnan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof JsUser.mySym) // this is not a symbol, its just a string

// If u want this mySym to be used as a symbol, then the key should be declared in [] square brackets
// console.log(JsUser.mySym) //  undefined
// console.log(JsUser[mySym]) // this is correct.


// Modifying the object values
JsUser.email = "adnan@chatgpt.com" //to modify the object value
// console.log(JsUser)

// If you want to freeze the object, I mean lock the object, so that no one can change that object. 
// Object.freeze(JsUser)

JsUser.email = "adnan@microsoft.com"
// console.log(JsUser)


// Lets add function in an object.

JsUser.greeting = function() {
    console.log("Hello Js user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`) // If u want to reference the same object, we use this keyword
}
// console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo()) 


// NOTE: Most of the times, we access the value of an object by using dot method, but some times, we have to use [] square brackets.

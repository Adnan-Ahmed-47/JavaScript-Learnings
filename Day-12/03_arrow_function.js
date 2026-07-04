// this keyword & Arrow functions

// this keyword refers to current context. this keyword tells us about the current context
const user = {
    username: "Adnan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`) // in this case, the current context is the user object as of now. 
        // console.log(this) // gets the current context, means the current object
    }
}

// user.welcomeMessage() // Adnan, welcome to website
// user.username = "Sam";
// user.welcomeMessage() // Sam, welcome to website

// console.log(this)  // {}

// NOTE: 
// -> when I print the this keyword in the object, it provides us the current context of that particular object, but if I log this outside the object globally, we get {} empty context or empty object, bcoz there is no context to it in node environment.
// -> On the other hand, if u log it in the browser console, we can see the Window in that, bcoz, the global object in the browser is Window. Previously, we use to have the JavaScript engine only in browser, after some time, the node, deno have come up and the engine is separated now. So this is the change we see in behaviour.
// -> Basically, we are able to use this keyword in objects only as of now.

// function chai() {
//     let username = "adnan"
//     console.log(this) // so many values
//     console.log(this.username) // undefined
// }
// chai()

// when u log this in the function, we get so many values in node environment, we get so many values, so there are so many things in this keyword.

// -------------------------------------------------------------------------------------------------------
// arrow functions

// const chai = () => {
//     console.log(this)
// }
// chai()

// Normal arrow function // Explicit return is when you write a return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return -> we don't use the curly braces and return keyword in a function and write in a single line as given below:
// const addTwo = (num1, num2) => num1 + num2

// If wrapped in curly braces, return is must, but if wrapped in parenthesis (), no need to write return keyword as given below: This is used mostly in react
// const addTwo = (num1, num2) => (num1 + num2)

// returning object in arrow function
const addTwo = (num1, num2) => ({username: "Adnan"})
console.log(addTwo())

// In the previous video we talked about object literals, now in this file we'll talk about singleton object.

// const tinderUser = new Object(); // {}
// const tinderUser = {}; // {}

// NOTE: There is no difference between these object declaration, just that one is declared using constructor so it is called singleton object and another is an object literal.

const tinderUser = {};

tinderUser.id = '123abc';
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// ----------------------------------------------------------------------------------
// Lets see objects inside objects

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: "Adnan",
            lastname: "Ahmed"
        }
    }
}

// console.log(regularUser.fullname) // { userfullname: { firstname: 'Adnan', lastname: 'Ahmed' } }
// console.log(regularUser.fullname.userfullname) // { firstname: 'Adnan', lastname: 'Ahmed' }
// console.log(regularUser.fullname.userfullname.lastname) // Ahmed 

// -------------------------------------------------------------------------------
// So, now we'll combine the objects, like we have combined the arrays, so in some cases we also need to combine an objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  // if we do this, again the same problem, in obj3 we get two objects

// const obj3 = Object.assign(obj1, obj2) // so with this we get the proper output as { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }, but it has assigned this to obj1 also, if you want this to just assign to new obj3, then:
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj2) // { '3': 'a', '4': 'b' }


// If we use the {} in the first param, it says that this is the target object to change on, so now the obj1 & obj2 will be not changed. So, basically, first param acts as a target and all the other params acts as a source, its not compulsory that we need to give {}, if we don't give also, all the values will go in obj1, obj1 acts as a target then.

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1) // { '1': 'a', '2': 'b' } 
// console.log(obj2) // { '3': 'a', '4': 'b' }

// NOTE: So, till now we used assign, but we use this assign also very less number of times, we actually use spread operator here as well most number of times as given below:

// --------------------------------------------------------------------------------
// Spread Operator

const obj3 = {...obj1, ...obj2} // this is mostly used

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    },
]

// console.log(users[1].id)

// -------------------------------------------------------------
// Methods

console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // we can get all the keys in one array, so the type will be array, and then we can also loop all of these --- [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]

// we get array inside array
// console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// If we want to know whether any value is there in the object?

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
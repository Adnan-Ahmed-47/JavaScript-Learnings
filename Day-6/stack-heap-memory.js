// Excalidraw -> tool to create image diagrams

// Stack & Heap memory

// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "adnanahmeddotcom";
anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

// NOTE: jab bhi ham another name ke andar kuch change karte hain toh woh copy mein change hota hai, original value change nahi hoti. 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Heap (Non-prmitive)
// NOTE: same memory ka reference milta hai, aur original value bhi change hoti hai.

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "adnan@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);



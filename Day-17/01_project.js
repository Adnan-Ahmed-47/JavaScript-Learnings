// 1. Login System

// Features:

// Username
// Password
// Check if user is logged in.
// Use truthy/falsy.
// Use ternary.

// ---------------------------------------- SOLUTION -----------------------------------------

const username = "Adnan"
const password = "Addy@123"

function isUserLoggedIn(name, pass) {
    let result = (name && pass) ? console.log("User Logged in") : console.log("Login failed")
    return result;
}

isUserLoggedIn(username, password)
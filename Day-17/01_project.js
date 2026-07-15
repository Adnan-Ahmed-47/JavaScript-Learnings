// 1. Login System

// Features:

// Username
// Password
// Check if user is logged in.
// Use truthy/falsy.
// Use ternary.

// ---------------------------------------- SOLUTION -----------------------------------------

// const username = "Adnan"
// const password = "Addy@123"
// function isUserLoggedIn(name, pass) {
//     let result = (name && pass) ? console.log("User Logged in") : console.log("Login failed")
//     return result;
// }
// isUserLoggedIn(username, password)

// ---------------------------------------- Actual Solution -----------------------------------------

const user = {
    username: "Adnan",
    password: "12345",
    isLoggedIn: false
}

// Login
function login(username, password) {
    if(!username || !password) {
        console.log("Please enter username and password.")
        return;
    }

    if(
        username === user.username &&
        password === user.password
    ) {
        user.isLoggedIn = true;

        console.log(
            user.isLoggedIn ? "Login Successful ✅" : "Login Failed ❌"
        )
    } else {
        console.log("Invalid credentials ❌")
    }
}

// Logout
function logout() {
    if(user.isLoggedIn) {
        user.isLoggedIn = false;
        console.log("Logout Successful 👋");
    } else {
        console.log("User is already logged out.");
    }
}

// Check login status
function checkLoginStatus() {
    console.log(
        user.isLoggedIn ? "User is logged in" : "User is not logged in"
    )
}

logout()
login("Adnan", "12345");
logout()
checkLoginStatus();
logout()

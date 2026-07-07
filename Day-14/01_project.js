// Project 1 — ATM Simulator
// Concepts Used
// Functions
// Objects
// Arrays
// Numbers
// Scope
// Features

// Create an account object:

// {
//   name: "Adnan",
//   balance: 5000,
//   accountNumber: 12345
// }

// Write functions:

// checkBalance()
// deposit(amount)
// withdraw(amount)
// printAccountDetails()

// +++++++++++++++++++++++++++++++++++ SOLUTION +++++++++++++++++++++++++++++++++++++++++

const account = {
  name: "Adnan",
  balance: 5000,
  accountNumber: 12345
};
const transactionHistory = ['Initial Balance of 5000'];

// Check Balance
function checkBalance() {
    console.log(`Check Balance: $${account.balance}`)
    return account.balance
}
checkBalance()

// Deposit Amount
function deposit(amount) {
    account.balance += amount
    transactionHistory.push(`Deposited: ${amount}`)
    console.log(`Successfully deposited $${amount}. New balance: $${account.balance}`)
}
deposit(1000)

// Withdraw amount
function withdraw(amount) {
    account.balance -= amount
    transactionHistory.push(`Withdrawn: ${amount}`)
    console.log(`Successfully withdrawn $${amount}. New balance: $${account.balance}`)
}
withdraw(4000)
withdraw(2000)

// Print Account Details
function printAccountDetails() {
  console.log("\n=== Account Details ===");
  console.log(`Account Holder: ${account.name}`);
  console.log(`Account Number: ${account.accountNumber}`);
  console.log(`Available Balance: $${account.balance}`);
  
  console.log("\n--- Recent Transactions ---");
  transactionHistory.forEach((log, index) => {
    console.log(`${index + 1}. ${log}`);
  });
  console.log("=======================\n");
}
printAccountDetails()


// --------------------------------------------------------------------------------------

// const account = {
//   name: "Adnan",
//   balance: 5000,
//   accountNumber: 12345
// };

// // Check Balance
// function checkBalance(obj) {
//     return obj.balance
// }
// console.log(`Your account balance is: ${checkBalance(account)}`)

// // Deposit amount
// function deposit(amount) {
//     // const availableAmount = checkBalance(account)
//     // return availableAmount + amount
//     return amount
// }
// console.log(deposit(1000))

// // Withdraw amount
// function withdraw(amount) {
//     // const availableAmount = checkBalance(account)
//     return amount;
// }
// console.log(withdraw(500))

// // Print Account Details
// function printAccDet(obj) {
//     return obj
// }
// console.log(printAccDet(account))
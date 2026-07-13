// 2. ATM Machine

// Features:

// Deposit
// Withdraw
// Check balance
// Use functions.

// ---------------------------------------- SOLUTION -----------------------------------------

const account = {
  name: "Adnan",
  balance: 5000,
  accountNumber: 12345
};
// console.log(`User Account Details: ${account}`) // gets [Object] [Object] bcoz, 
// i) String Coercion: Template literals (${}) automatically convert objects into strings.
// ii) Default Behavior: JavaScript converts standard objects to the generic string "[object Object]". 

// console.log(`User Account Details: ${JSON.stringify(account)}`); // You can use JSON.stringify() to turn the object into a readable text string.
console.log("User Account Details:", account);


// Deposit
let dAmount = 1000;
function depositAmount(amount) {
    account.balance += amount
    console.log(`Deposit Amount: ${amount}`)
    // console.log(`Account Balance after Deposit ${JSON.stringify(account)}`)
}
depositAmount(dAmount);

// -------------------------------------------------------------------------------
// Withdraw
let wAmount = 500;
function withdrawAmount(amount) {
    if(account.balance >= amount) {
        account.balance -= amount
        console.log(`Withdrawal Amount: ${amount}`)
        // console.log(`Account Balance after Withdrawal ${JSON.stringify(account)}`)
    }
}
withdrawAmount(wAmount)
withdrawAmount(300)
depositAmount(100)

// -------------------------------------------------------------------------------
// Check Balance
function checkBalance(amount) {
    console.log("Current Available Balance: ", amount.balance)
}
checkBalance(account)
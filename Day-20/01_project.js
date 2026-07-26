// Project 1 — Banking System V2

// Features:

// Create multiple accounts.
// Deposit money.
// Withdraw money.
// Transfer money.
// Print transaction history.
// Find richest account.
// Calculate total bank balance.

// Concepts used:

// Objects
// Arrays
// Functions
// Loops
// filter
// reduce

// ++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++++++++

// 1. array with multiple objects/accounts
// 2. depositMoney(money) -> function
// 3. withdrawMoney(money) -> function
// 4. transferMoney(money) -> function
// 5. printTransactionHistory(money) -> function

const bankUserAccounts = [
  {
    accountId: "ACC-2026-9011",
    accountHolder: "Elena Rostova",
    email: "elena.r@example.com",
    accountType: "Checking",
    balance: 4850.25, 
    transactions: []
  },
  {
    accountId: "ACC-2026-3345",
    accountHolder: "Amara Diallo",
    email: "amara.d@example.com",
    accountType: "Savings",
    balance: 850.00,
    transactions: []
  }
];

// HELPER FUNCTION
function findAccount(accountId) {
    const matchedAccounts = bankUserAccounts.filter((acc) => acc.accountId === accountId);
    // console.log(matchedAccounts)
    return matchedAccounts.length > 0 ? matchedAccounts[0] : null
}
// console.log(findAccount("ACC-2026-9011"))


// Create Multiple Accounts
function createAccount(id, name, mail, type, initialBalance) {
    const newAccount = {
        accountId: id,
        accountHolder: name,
        email: mail,
        accountType: type,
        balance: initialBalance, 
        transactions: []
    }
    
    bankUserAccounts.push(newAccount)
    console.log(`✅ Account created successfully for ${newAccount.accountHolder}`)
    return bankUserAccounts
}
createAccount("ACC-2026-01", "Adnan Ahmed", "adnan01@example.com", "Savings", 3000.00)
// console.log(createAccount("ACC-2026-01", "Adnan Ahmed", "adnan01@example.com", "Savings", 3000.00))

// Deposit Money
function depositMoney(accId, money) {
    if(money <= 0) {
        console.log("❌ Error: Deposit amount must be greater than zero.")
        return false;
    }

    const account = findAccount(accId)
    if(!account) {
        console.log(`❌ Error: Account ${accountId} not found.`)
        return false;
    }

    account.balance += money
    account.transactions.push({
        type: "Deposit",
        amount: money,
        date: new Date().toLocaleDateString(),
        details: "Self cash/check deposit"
    })
    
    console.log(`💵 Deposited $${money} to ${account.accountHolder}. New Balance: $${account.balance.toFixed(2)}`);
    return true;
}
console.log(depositMoney("ACC-2026-01", 500))


// Withdraw Money
function withdrawMoney(accId, money) {
    if(money <= 0) {
        console.log("❌ Error: Withdraw amount must be greater than zero.")
        return false;
    }

    const account = findAccount(accId)
    if(!account) {
        console.log(`❌ Error: Account ${accountId} not found.`)
        return false;
    }

    // Check if account has enough funds
    if(account.balance < money) {
        console.log(`❌ Error: Insufficient funds for ${account.accountHolder}. Current Balance: $${account.balance.toFixed(2)}`)
        return false;
    }

    account.balance -= money
    account.transactions.push({
        type: "Withdrawal",
        amount: money,
        date: new Date().toLocaleDateString(),
        details: "ATM/Counter withdrawal"
    })
    
    console.log(`💵 Withdrew $${money} to ${account.accountHolder}. Remaining Balance: $${account.balance.toFixed(2)}`);
    return true;
}
console.log(withdrawMoney("ACC-2026-9011", 600))



// // Deposit Money
// function depositMoney(accId, money) {
//     const user = bankUserAccounts.forEach((item) => {
//         if(item.accountId === accId) {
//             item.balance += money
//             item.transactions.push(`Depositted Amount: ${money}`)
//         }
//     })
//     console.log(user)
//     if(user) {
//         console.log(`Successfully Deposited $${money} to ${item.accountHolder}. New balance: $${item.balance}`)
//     } else {
//         console.log(`Account not Found`)
//     }

//     return bankUserAccounts
// }
// console.log(depositMoney("ACC-2026-03", 500))




























































// const bankUserAccounts = [
//   {
//     accountId: "ACC-2026-9011",
//     accountHolder: "Elena Rostova",
//     email: "elena.r@example.com",
//     accountType: "Checking",
//     balance: 4850.25,
//     currency: "USD",
//     status: "Active",
//     openedDate: "2024-03-12",
//     recentTransactions: [
//       { id: "TXN-001", type: "Debit", amount: 45.50, description: "Grocery Store", date: "2026-07-22" },
//       { id: "TXN-002", type: "Credit", amount: 2500.00, description: "Payroll Deposit", date: "2026-07-20" }
//     ]
//   },
//   {
//     accountId: "ACC-2026-4432",
//     accountHolder: "Marcus Vance",
//     email: "m.vance@example.com",
//     accountType: "Savings",
//     balance: 34200.00,
//     currency: "USD",
//     status: "Active",
//     openedDate: "2022-11-05",
//     recentTransactions: [
//       { id: "TXN-003", type: "Credit", amount: 50.00, description: "Interest Payment", date: "2026-07-01" }
//     ]
//   },
//   {
//     accountId: "ACC-2026-1189",
//     accountHolder: "Priya Sharma",
//     email: "priya.s@example.com",
//     accountType: "Checking",
//     balance: 1250.75,
//     currency: "EUR",
//     status: "Active",
//     openedDate: "2025-01-20",
//     recentTransactions: [
//       { id: "TXN-004", type: "Debit", amount: 12.99, description: "Streaming Service", date: "2026-07-24" },
//       { id: "TXN-005", type: "Debit", amount: 85.00, description: "Electric Utility", date: "2026-07-18" }
//     ]
//   },
//   {
//     accountId: "ACC-2026-7761",
//     accountHolder: "Kenji Sato",
//     email: "k.sato@example.com",
//     accountType: "Credit Card",
//     balance: -620.40,
//     currency: "USD",
//     status: "Active",
//     openedDate: "2023-06-15",
//     recentTransactions: [
//       { id: "TXN-006", type: "Debit", amount: 120.00, description: "Restaurant", date: "2026-07-23" }
//     ]
//   },
//   {
//     accountId: "ACC-2026-3345",
//     accountHolder: "Amara Diallo",
//     email: "amara.d@example.com",
//     accountType: "Savings",
//     balance: 850.00,
//     currency: "GBP",
//     status: "Suspended",
//     openedDate: "2025-08-14",
//     recentTransactions: [
//       { id: "TXN-007", type: "Debit", amount: 500.00, description: "ATM Withdrawal ATM-4", date: "2026-07-10" }
//     ]
//   }
// ];


// const bankUserAccounts = [
//   {
//     accountId: "ACC-2026-9011",
//     accountHolder: "Elena Rostova",
//     email: "elena.r@example.com",
//     accountType: "Checking",
//     balance: 4850.25, 
//     transactions: []
//   },
//   {
//     accountId: "ACC-2026-4432",
//     accountHolder: "Marcus Vance",
//     email: "m.vance@example.com",
//     accountType: "Savings",
//     balance: 34200.00,
//     transactions: []
//   },
//   {
//     accountId: "ACC-2026-1189",
//     accountHolder: "Priya Sharma",
//     email: "priya.s@example.com",
//     accountType: "Checking",
//     balance: 1250.75,
//     transactions: []
//   },
//   {
//     accountId: "ACC-2026-7761",
//     accountHolder: "Kenji Sato",
//     email: "k.sato@example.com",
//     accountType: "Credit Card",
//     balance: -620.40,
//     transactions: []
//   },
//   {
//     accountId: "ACC-2026-3345",
//     accountHolder: "Amara Diallo",
//     email: "amara.d@example.com",
//     accountType: "Savings",
//     balance: 850.00,
//     transactions: []
//   }
// ];



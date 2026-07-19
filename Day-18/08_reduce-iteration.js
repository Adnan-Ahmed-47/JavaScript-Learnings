// reduce

const myNums = [1, 2, 3]

// using normal function
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`)
//     return acc + currVal
// }, 0)

// using arrow function
// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currval: ${currVal}`)
//     return acc + currVal
// }, 0)
// OR
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal)


// -------------------------------------------------------------------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const totalPrice = shoppingCart.reduce((acc, currPrice) => {
//     return acc + currPrice.price
// }, 0)
// OR
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice)
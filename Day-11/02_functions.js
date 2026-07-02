// One common situation while building the projects, we have a shopping cart, in which the user will add and add and add the items multiple times, so we don't know how many numbers/items/products the user will add in the cart, we just will have to add all the item prices which the user adds. So, here comes the concept of REST Operator.

// Its basically similar to spread operator, as ... but it will depend on what situation we are using, accordingly it becomes rest or spread operator.

// REST Operator
function calculateCartPrice(...num1) { // ... packs all the values in one bundle
    return num1
}
// console.log(calculateCartPrice(200, 400, 500)) // [ 200, 400, 500 ]

// NOTE: It returns an array, so that we can loop and add all the prices.
function calculateCartPrices(val1, val2, ...num1) { 
    return num1
}
console.log(calculateCartPrices(200, 400, 500, 2000)) // [ 500, 2000 ]
// NOTE: This is because, 200 is in val1, 400 is in val2, others will be in rest operator

// ---------------------------------------------------------------------------------------------

// Passing Objects to function.

const user = {
    username: "Adnan",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Mannan",
    price: 399
})

// ---------------------------------------------------------------------------------------------

// Passing Arrays to function.

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getarray) {
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))

// NOTE: You may also pass the direct objects or arrays in the function instead of creating separate variable and passing it.
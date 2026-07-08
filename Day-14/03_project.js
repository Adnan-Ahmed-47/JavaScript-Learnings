// Project 3 — Shopping Cart Calculator

// Create functions:

// addProduct(product)
// removeLastProduct()
// calculateTotal()
// findMostExpensiveProduct()
// totalQuantity()

// ++++++++++++++++++++++++++++++++++ SOLUTION +++++++++++++++++++++++++++++++++++++++++++++

const shopping_cart = [
    {
        id: 1,
        name: "IPhone",
        price: 70000,
        quantity: 1
    },
    {
        id: 2,
        name: "Bourbon",
        price: 50,
        quantity: 3
    },
    {
        id: 3,
        name: "Lays",
        price: 30,
        quantity: 1
    },
    {
        id: 4,
        name: "Gobbles",
        price: 50,
        quantity: 4
    }
]
console.log(shopping_cart)

// Add Product
function addProduct(product) {
    shopping_cart.push(product)
    // console.log(`Product Added: ${shopping_cart}`)
    console.log("Product Added: ", shopping_cart)
}
addProduct({
    id: 5, 
    name: "Cone",
    price: 68,
    quantity: 2
})


// Remove last product
function removeLastProduct() {
    shopping_cart.pop()
    // console.log(`Removed Product: ${shopping_cart}`)
    console.log("Removed Product: ", shopping_cart)
}
removeLastProduct()


// Calculate Total
function calculateTotal() {
    const listLen = shopping_cart.length;
    // let finalTotal = 0;
    // shopping_cart.forEach((item) => {
    //     let res = item.price * item.quantity;
    //     finalTotal += res;
    // })
    // console.log(finalTotal)
    const getPrice = ((shopping_cart[0].price) * (shopping_cart[0].quantity)) +
                     ((shopping_cart[1].price) * (shopping_cart[1].quantity)) +
                     ((shopping_cart[2].price) * (shopping_cart[2].quantity)) +
                     ((shopping_cart[3].price) * (shopping_cart[3].quantity))
        console.log(`Total Price: ${getPrice}`)
}
calculateTotal()


// Find most expensive product
function findMostExpensiveProduct() {
    let expProd = Math.max(shopping_cart[0].price, shopping_cart[1].price, shopping_cart[2].price, shopping_cart[3].price)
    shopping_cart.forEach((item) => {
        if(item.price === expProd) {
            console.log("Expensive Product: ", item)
        }
    })
}
findMostExpensiveProduct()


// Total Quantity
function totalQuantity() {
    const totalQuan = shopping_cart[0].quantity + shopping_cart[1].quantity + shopping_cart[2].quantity + shopping_cart[3].quantity;
    console.log(`Total Quantity: ${totalQuan}`)

    // let itemQuan = null;
    // shopping_cart.forEach((item) => {
    //     itemQuan += item.quantity
    // })
    // console.log(itemQuan)
}
totalQuantity()
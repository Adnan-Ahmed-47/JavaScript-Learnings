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
// console.log(shopping_cart)

// Add Products
const prod1 = shopping_cart.push({id: 5, name: "Chocolate", price: 72, quantity: 2})
const prod2 = shopping_cart.push({id: 6, name: "Chips", price: 10, quantity: 10})
console.log("Added Products: ", shopping_cart)
// ----------------------------------------------------------------------

// Remove Product
shopping_cart.pop()
console.log("Removed Product: ", shopping_cart)
// ----------------------------------------------------------------------

// Calculate total
const totalAmount = (shopping_cart[0].price * shopping_cart[0].quantity) + 
                    (shopping_cart[1].price * shopping_cart[1].quantity) +
                    (shopping_cart[2].price * shopping_cart[2].quantity) +
                    (shopping_cart[3].price * shopping_cart[3].quantity) + 
                    (shopping_cart[4].price * shopping_cart[4].quantity) ;
console.log("Total Amount: ", totalAmount)

// ----------------------------------------------------------------------

// Find expensive item

const expItem = Math.max(
    shopping_cart[0].price, 
    shopping_cart[1].price,
    shopping_cart[2].price,
    shopping_cart[3].price, 
    shopping_cart[4].price 
);
console.log("Expensive Item: ", shopping_cart[0])

// ----------------------------------------------------------------------

// Total quantity

const totalQuantity = shopping_cart[0].quantity +
    shopping_cart[1].quantity +
    shopping_cart[2].quantity +
    shopping_cart[3].quantity +
    shopping_cart[4].quantity ;

console.log("Total quantity: ", totalQuantity)
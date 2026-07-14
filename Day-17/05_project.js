// 5. E-commerce Discount Calculator

// Input:

// cartValue = 5000;

// Rules:

// Above 5000 → 20% discount
// Above 3000 → 10%
// Above 1000 → 5%

// Use:

// functions
// if/else
// ternary
// objects

// ---------------------------------------- SOLUTION -----------------------------------------

// const shopping_cart = [
//     {
//         id: 1,
//         name: "Chain",
//         price: 1000,
//         quantity: 1
//     },
//     {
//         id: 2,
//         name: "Shoes",
//         price: 499,
//         quantity: 2
//     },
//     {
//         id: 3,
//         name: "Cooker",
//         price: 950,
//         quantity: 2
//     },
//     {
//         id: 4,
//         name: "Watch",
//         price: 400,
//         quantity: 1
//     },
//     {
//         id: 5,
//         name: "Jeans",
//         price: 400,
//         quantity: 1
//     },
//     {
//         id: 6,
//         name: "Shirt",
//         price: 300,
//         quantity: 2
//     }
// ]
// let cartValue = 0;


// calculateCartValue()
// getDiscountOnPurchase(cartValue)


// // Calculate Cart Value
// function calculateCartValue() {
//     const calculateCart = shopping_cart.forEach((item) => {
//     return cartValue += item.price * item.quantity
//     })
// }

// // Discount Value function
// function getDiscountOnPurchase(amount) {
//     if(amount > 5000) {
//         console.log(`Congrats! You got a discount of 20% on your purchase`)
//     } else if(amount > 3000 && amount <= 5000) {
//         console.log(`Congrats! You got a discount of 10% on your purchase`)
//     } else if(amount > 1000 && amount <= 3000) {
//         console.log(`Congrats! You got a discount of 5% on your purchase`)
//     } else {
//         console.log(`Sorry! You have to pay full amount`)
//     }
// }


// ---------------------------------------- Actual Solution -----------------------------------------

const customer = {
    name: "Adnan",
    cartValue: 5000
};

function calculateDiscount(cartValue) {
    let discount = 0;

    if (cartValue > 5000) {
        discount = 20;
    } else if (cartValue > 3000) {
        discount = 10;
    } else if (cartValue > 1000) {
        discount = 5;
    } else {
        discount = 0;
    }

    const finalAmount = cartValue - (cartValue * discount) / 100;

    return {
        discountPercentage: discount,
        finalPrice: finalAmount
    };
}

const result = calculateDiscount(customer.cartValue);
console.log(result);
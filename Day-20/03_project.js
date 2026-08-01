// Project 3 — E-commerce System

// Features:

// Add products.
// Remove products.
// Search products.
// Calculate total cart value.
// Apply discount.
// Calculate GST.
// Print final bill.

// ++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++++++++

let ecomProducts = [
  {
    productId: "PROD-2026-001",
    name: "Wireless Mechanical Keyboard",
    category: "Electronics",
    price: 120.00,
    stock: 25,
    rating: 4.8
  },
  {
    productId: "PROD-2026-002",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.99,
    stock: 10,
    rating: 4.5
  },
  {
    productId: "PROD-2026-003",
    name: "Stainless Steel Water Bottle",
    category: "Lifestyle",
    price: 25.50,
    stock: 150,
    rating: 4.2
  },
  {
    productId: "PROD-2026-004",
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 199.00,
    stock: 0,
    rating: 4.7
  },
//   {
//     productId: "PROD-2026-005",
//     name: "Leather Minimalist Wallet",
//     category: "Accessories",
//     price: 45.00,
//     stock: 65,
//     rating: 4.4
//   }
];


// Feature 1: Add Products
function addProducts(productId, name, category, price, stock, rating) {
    const newProduct = { productId, name, category, price, stock, rating };
    ecomProducts.push(newProduct)
    // console.log(ecomProducts)
    return ecomProducts
}
addProducts("PROD-2026-005", "Leather Minimalist Wallet", "Accessories", 45.00, 65, 4.4)


// Feature 2: Remove Products
function removeProduct(productId) {
    const initialLength = ecomProducts.length;
    ecomProducts = ecomProducts.filter((item) => item.productId !== productId)

    if(ecomProducts.length < initialLength) {
        console.log(`Product with ID ${productId} removed.`)
    } else {
        console.log(`Product with ID ${productId} not found.`)
    }
}
removeProduct("PROD-2026-003")


// Feature 3: Search products
function searchProduct(product) {
    const prod = ecomProducts.filter((item) => item.name === product);
    if(prod.length === 0) {
        console.log(`No product name found with ${product}`)
        return;
    }
    // console.log(prod)
    // console.log(prod[0].name)
    if(prod[0].name === product) {
        console.log(`${product} Found.`)
    } else {
        console.log(`${product} not found.`)
    }
}
searchProduct("Ergonomic Office Chair")
// console.log(ecomProducts)

// Feature 4: Calculate total cart value
function calculateCart() {
    if (ecomProducts.length === 0) return 0;

    const totalValue = ecomProducts.reduce((acc, currVal) => {
        return acc = acc + currVal.price * currVal.stock
    }, 0)
    console.log(`Total Cart Value: $${totalValue}`)
    return totalValue
}
calculateCart()


// Feature 5: Apply Discount
function discount() {
    const total = calculateCart();
    let discountedAmount;
    if(total > 5000) {
        discountedAmount = total * (10/100)
        console.log(`Congrats! You've got the discount of 10%`)
    } else if (total > 3000 && total < 5000) {
        discountedAmount = total * (5/100)
        console.log(`Congrats! You've got the discount of 5%`)
    }

    let grandTotal = total - discountedAmount;
    return grandTotal;

}
console.log(discount())

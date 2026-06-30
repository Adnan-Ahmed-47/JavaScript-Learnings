const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 14.99,
    available: true
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    available: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.50,
    available: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    available: true
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 15.25,
    available: true
  }
];

// Add books
books.push({title: "The Catcher in the Rye", author: "J.D. Salinger", price: 8.99, available: true})
books.push({title: "Fahrenheit 451", author: "Ray Bradbury", price: 11.45, available: true})
// console.log(books)
// -----------------------------------------------------------------------------

// Borrow books

const booksDirectory = {
    [books[0].title]: books[0],
    [books[1].title]: books[1],
    [books[2].title]: books[2],
    [books[3].title]: books[3],
    [books[4].title]: books[4],
    [books[5].title]: books[5],
    [books[6].title]: books[6],
}
// const bookIndexMap = {
//     "The Hobbit": 0,
//     "1984": 1,
//     "To Kill a Mockingbird": 2,
//     "The Great Gatsby": 3,
//     "Brave New World": 4,
//     "The Catcher in the Rye": 5,
//     "Fahrenheit 451": 6
// };
// console.log(booksDirectory)
// console.log(booksDirectory[books[1].title])


const arr = []
arr.push(booksDirectory[books[0].title]);
arr.push(booksDirectory[books[5].title]);
console.log("Borrowed Books: ", arr)
// console.log("After borrowing Books: ", books)

// const borrowIndex = bookIndexMap["1984"];
// books[borrowIndex].available = false;
// console.log("Borrowed 1984:", books[borrowIndex]);
// console.log(books, "books borrow")


// -----------------------------------------------------------------------------

// Return books

const returnArr = []
returnArr.push(booksDirectory[books[5].title]);
console.log("Return Books: ", returnArr)
// console.log("After returning Books: ", books)

// const returnIndex = bookIndexMap["The Hobbit"];
// books[returnIndex].available = true;
// console.log("Returned The Hobbit:", books[returnIndex]);
// console.log(books, "books returned")

// -----------------------------------------------------------------------------

// Count available books

console.log("Available Books: ", books.length)

// -----------------------------------------------------------------------------

// Find costly book

const maxPrice = Math.max(
    books[0].price, books[1].price, books[2].price,
    books[3].price, books[4].price, books[5].price, books[6].price
);

const priceMap = {
    [books[0].price]: books[0],
    [books[1].price]: books[1],
    [books[2].price]: books[2],
    [books[3].price]: books[3],
    [books[4].price]: books[4],
    [books[5].price]: books[5],
    [books[6].price]: books[6]
};
console.log("Most Expensive Book:", priceMap[maxPrice]);
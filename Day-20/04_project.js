// Project 4 — Library System Pro

// Features:

// Add books.
// Borrow books.
// Return books.
// Find books by genre.
// Count books by author.
// Find most expensive book.

// ++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++++++++

const libraryBooks = [
  {
    bookId: "BK-2026-001",
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    price: 14.99,
    isAvailable: true,
    borrowedCount: 42
  },
  {
    bookId: "BK-2026-002",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    price: 22.50,
    isAvailable: false,
    borrowedCount: 85
  },
  {
    bookId: "BK-2026-003",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 18.00,
    isAvailable: true,
    borrowedCount: 120
  },
  {
    bookId: "BK-2026-004",
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Sci-Fi",
    price: 27.99,
    isAvailable: true,
    borrowedCount: 56
  },
//   {
//     bookId: "BK-2026-005",
//     title: "The Martian",
//     author: "Andy Weir",
//     genre: "Sci-Fi",
//     price: 15.99,
//     isAvailable: true,
//     borrowedCount: 95
//   }
];


// Feature 1: Add books
function addBook(bookId, title, author, genre, price, isAvailable, borrowedCount) {
    const obj = {bookId, title, author, genre, price, isAvailable, borrowedCount}
    libraryBooks.push(obj)
    return libraryBooks;
}
console.log(addBook("BK-2026-005", "The Martian", "Andy Weir", "Sci-Fi", 15.99, true, 95))


// Feature 2: Borrow books
function borrowBook(bookTitle) {
    const borrow = libraryBooks.filter((book) => {
        if(book.title === bookTitle) {
            return book.borrowedCount++
        }
    });

    return libraryBooks
}
console.log(borrowBook('Atomic Habits'))


// Feature 3: Return books
function returnBook(bookTitle) {
    const books = libraryBooks.filter((book) => {
        if(book.title === bookTitle) {
            book.borrowedCount--
        }
    });

    return libraryBooks
}
console.log(returnBook('The Midnight Library'))


// Feature 4: Find books by genre
function findBook(genre) {
    const books = libraryBooks.filter(book => book.genre === genre)

    return books
}
console.log(findBook("Sci-Fi"))


// Feature 5: Count books by author
function countBooks(author) {
    let count = 0;
    const countbooks = libraryBooks.filter((book) => {
        if(book.author === author) {
            count++;
        }
    })
    console.log(`Total Count of ${author}: ${count}`)
    return count
}
// const result = countBooks("Andy Weir")
countBooks("Andy Weir")


// Feature 6: Find most expensive book
function expensiveBook() {
    let expensiveBook = libraryBooks[0]

    let expensive = libraryBooks.map((book) => {
        if(book.price > expensiveBook.price) {
            expensiveBook = book
        }
    })

    return expensiveBook
}
console.log(expensiveBook())
// Project 5 — Library Management

// Create functions:

// borrowBook(title)
// returnBook(title)
// availableBooks()
// costliestBook()
// printBook(title)

// ++++++++++++++++++++++++++++++++++++ SOLUTION +++++++++++++++++++++++++++++++++++++++

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

function borrowBook(title){

    if(books[0].title===title){

        books[0].available=false;

        console.log(books[0]);

    }

    if(books[1].title===title){

        books[1].available=false;

        console.log(books[1]);

    }

}

function returnBook(title){

    if(books[0].title===title){

        books[0].available=true;

        console.log(books[0]);

    }

    if(books[1].title===title){

        books[1].available=true;

        console.log(books[1]);

    }

}

function availableBooks(){

    console.log(books);

}

function costliestBook(){

    const highest=Math.max(

        books[0].price,

        books[1].price,

        books[2].price,

        books[3].price,

        books[4].price

    );

    console.log(highest);

}

function printBook(title){

    if(books[0].title===title)

        console.log(books[0]);

    if(books[1].title===title)

        console.log(books[1]);

}

borrowBook("1984");

returnBook("1984");

costliestBook();

availableBooks();

printBook("The Hobbit");


// Borrow Book
// function borrowBook(title) {
//     books.forEach((book) => {
//         if(book.title === title) {
//             console.log("Borrowed Book: ", book)
//         }
//     })
// }
// borrowBook("Brave New World")


// // Return Book
// function returnBook(title) {

// }
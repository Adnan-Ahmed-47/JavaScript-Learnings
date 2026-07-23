// +++++++++++++++++++++++++++++++++++++++ EASY QUESTIONS ++++++++++++++++++++++++++++++++++++++++

for(let i=1; i<=20; i++) {
    // console.log(i)
}

for(let i=1; i<=50; i++) {
    if(i%2 == 0) {
        // console.log(i)
    }
}

let table = 7
for(let i=1; i<=10; i++) {
    let result = table * i; 
    // console.log(`${table} * ${i} = ${result}`)
}

const fruits = ["apple", "banana", "mango"];
for (const elem of fruits) {
    // console.log(elem)
}

for (const elem in fruits) {
    // console.log(elem)
}


const course = ["js", "java", "python"];
course.forEach((item) => {
    // console.log(item) 
})

// const arr = [1, 2, 3]
// const newArr = arr.map((item) => item * 5)
// console.log(newArr)

// const arr = [10, 20, 30, 40, 50]
// const newArr = arr.filter((item) => item > 25)
// console.log(newArr)

// const arr = [5, 10, 15]
// const newArr = arr.reduce((acc, curr) => (
//     acc + curr
// ), 0)
// console.log(`Sum: ${newArr}`)

// const str = "Adnan";
// for (const elem of str) {
//     console.log(elem)
// }

// const obj = {
//     name: "Adnan",
//     age: 25,
// }
// for (const elem in obj) {
//     // console.log(elem)
// }

// for (const item in obj) {
//     console.log(obj[item])
// }

// for(let i=0; i<=10; i++) {
//     if(i == 7) {
//         console.log(`Detected 7`)
//         break;
//     }
//     console.log(`Value of i is ${i}`) 
// }

// for(let i=0; i<=10; i++) {
//     if(i == 5) {
//         console.log(`Detected 5`)
//         continue;
//     }
//     console.log(`Value of i is ${i}`) 
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i++
// }


// +++++++++++++++++++++++++++++++++++++++ MEDIUM QUESTIONS ++++++++++++++++++++++++++++++++++++++++

// for(let i= 1; i<=10; i++) {
//     for(let j=1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log('-------------------------------')
// }

// const arr = [200, 501, 10, 80]
// let maxVal = 0;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] >= maxVal) {
//         maxVal = arr[i];
//     }
// }
// console.log(`Max Value: ${maxVal}`)

// const arr = [2, 50, 10, 8, 340]
// let minVal = Infinity;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] <= minVal) {
//         minVal = arr[i];
//     }
// }
// console.log(`Min Value: ${minVal}`)

// const str = "javascript";
// let vowels = 'aeiou'
// let count = 0;
// for(let i=0; i<str.length; i++) {
//     if(vowels.includes(str[i])) {
//         // console.log(str[i])
//         count += 1
//     }
// }
// console.log(`Total Vowels: ${count}`)


// const arr = ["adnan", "ahmed"];
// const newArr = arr.map((item) => {
//     return item.toUpperCase()
// })
// console.log(newArr)


// const students = [
//     {name: "Adnan", marks: 97},
//     {name: "Noman", marks: 61},
//     {name: "Faizan", marks: 45},
//     {name: "Mannan", marks: 99},
//     {name: "Ismail", marks: 80},
//     {name: "Muneeb", marks: 81},
//     {name: "Viqar", marks: 68},
//     {name: "Sameer", marks: 53},
//     {name: "Mudabbir", marks: 99}
// ]
// const topperStudents = students.filter((item) => (
//     item.marks > 80
// ))
// console.log(topperStudents)

// const totalMarks = students.reduce((acc, curr) => (
//     acc + curr.marks
// ), 0)
// console.log(`Total Marks: ${totalMarks}`)


// const obj = {
//     name: "Adnan",
//     city: "Hyderabad"
// }
// for (const key in obj) {
//     console.log(key)
// }


// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
// ] 
// const userBooks = books.filter((book) => book.publish > 2000)
// console.log(userBooks)


// for(let i=1; i<=100; i++) {
//     if(i%2 == 1) {
//         console.log(i)
//     }
// }


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
// const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
// console.log(totalPrice)


// function writeTable(arr) {
//     arr.forEach((item) => {
//         for(let i=1; i<=10; i++) {
//             console.log(`${item} * ${i} = ${item * i}`)
//         }
//     })
// }
// writeTable([2, 4, 6])
// function listItems(items) {
//   items.forEach((item, index) => {
//     console.log(`${index + 1}. ${item}`);
//   });
// }
// listItems(["Apple", "Banana", "Cherry"]);


// let i=0
// while (i<=100) {
//     if(i%2 == 0) {
//         console.log(i)
//     }
//     i++
// }


// const arr = [1, 2, 3]
// const newArr = arr.map((item) => item * item)
// console.log(newArr)


// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.forEach((item) => {
//     console.log(item)
//     return item // undefined
// })
// console.log(newArr) // returns undefined, bcoz forEach won't return any value, it just prints it.
// const newArr = arr.map((item) => {
//     console.log(item)
//     return item [1, 2, 3, 4, 5]
// })
// console.log(newArr) // return new Array, it prints as well as returns the value. 



// +++++++++++++++++++++++++++++++++++++++ HARD QUESTIONS +++++++++++++++++++++++++++++++++++++++++++++++

// const students = [
//     {name: "A", marks: 90},
//     {name: "B", marks: 70},
//     {name: "C", marks: 95}
// ]
// AI solution
// function findTopper(studentList) {
//     let topper = studentList[0]
//     studentList.forEach((student) => {
//         if(student.marks > topper.marks) {
//             topper = student
//         }
//     })
//     return topper
// }
// console.log(findTopper(students))

// My way
// let topMarks = students[0]
// const topperStudent = students.map((student) => {
//     if(student.marks > topMarks.marks) {
//         topMarks = student
//     }
//     return topMarks
// })
// console.log(topMarks)




// const students = [
//     {name: "A", marks: 90},
//     {name: "B", marks: 30},
//     {name: "C", marks: 95},
//     {name: "D", marks: 22}
// ]
// const failedStudents = students.filter((student) => student.marks < 35)
// console.log(failedStudents)


// function calculateAverage(studentsList) {
//     const totalMarks = students.reduce((acc, student) => {
//         return acc + student.marks
//     }, 0)

//     return totalMarks/studentsList.length;

// }
// console.log(calculateAverage(students))


// const students = [
//     {name: "A", marks: 90, city: "Hyderabad"},
//     {name: "B", marks: 30, city: "Banglore"},
//     {name: "C", marks: 95, city: "Agra"},
//     {name: "D", marks: 22, city: "Chennai"}
// ]
// const hydStudents = students.filter((student) => student.city === "Hyderabad")
// console.log(hydStudents)


// const employees = [
//   { name: "Alice", salary: 5000 },
//   { name: "Bob", salary: 6000 },
//   { name: "Charlie", salary: 4500 }
// ];
// const totalSalary = employees.reduce((acc, employee) => {
//     return acc + employee.salary
// }, 0)
// console.log(totalSalary)


// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Science', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
// ] 
// function countBooks(booksList) {
//     let count = 0;

//     booksList.forEach((book) => {
//         if(book.genre === "Science") {
//             count++
//         }
//     })
//     return count;
// }
// console.log(countBooks(books))



// for(let i=1; i<=5; i++) {
//     let rowStr = ""
//     for(let j=1; j<=i; j++) {
//         rowStr += "*"
//     }
//     console.log(rowStr)
// }
// OR
// function printPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     // repeat() creates a string with 'i' number of stars
//     console.log("*".repeat(i));
//   }
// }
// printPattern(5);



// for(let i=1; i<=5; i++) {
//     let rowStr = "";
//     for(j=1; j<=i; j++) {
//         rowStr += j
//     }
//     console.log(rowStr)
// }

// Flatten the array without using flat method
// const arr = [1, [2, 3], [4, 5]]
// console.log(arr.flat()) // using flat
// console.log([].concat(...arr)) // using concat & spread operator
// //using reduce
// const nestedArray = [1, [2, 3], [4, 5]];
// const flattened = nestedArray.reduce((accumulator, current) => {
//   return accumulator.concat(current);
// }, []); // [] is the starting empty array
// console.log(flattened); 
// // Output: [1, 2, 3, 4, 5]

// //using forEach
// const nestedArray = [1, [2, 3], [4, 5]];
// const flattened = [];

// nestedArray.forEach(item => {
//   if (Array.isArray(item)) {
//     // If it's an array, spread and push its contents
//     flattened.push(...item);
//   } else {
//     // If it's a single number, just push it
//     flattened.push(item);
//   }
// });
// console.log(flattened); 
// Output: [1, 2, 3, 4, 5]


// const arr = [1, 2, 3, 3, 1, 5, 6, 3]
// const uniqueArr = arr.reduce((acc, item) => {
//     if(item && !acc.includes(item)) {
//         acc.push(item)
//     }
//     return acc
// }, [])
// console.log(uniqueArr)


// const students = [
//   { name: "Alice", city: "New York" },
//   { name: "Bob", city: "London" },
//   { name: "Charlie", city: "New York" },
//   { name: "David", city: "Paris" },
//   { name: "Emma", city: "London" }
// ];
// New York: Alice, Charlie
// London: Bob, Emma
// Paris: David

// using reduce
// const groupedByCity = students.reduce((accumulator, student) => {
//   const key = student.city;
//   // If the city doesn't exist as a key yet, create an empty array for it
//   if (!accumulator[key]) {
//     accumulator[key] = [];
//   }  
//   // Push the current student into that city's array
//   accumulator[key].push(student);
//   return accumulator;
// }, {}); // Start with an empty object {}
// console.log(groupedByCity);

// using forEach
// const groupedByCity = {};
// students.forEach((student) => {
//   const key = student.city;
//   if (!groupedByCity[key]) {
//     groupedByCity[key] = [];
//   }
//   groupedByCity[key].push(student);
// });
// console.log(groupedByCity);



// const cities = students.reduce((acc, item) => {
//     if(!acc.includes(item.city)) {
//         acc.push(`${item.city}` )
//     }
//     return acc;
// }, [])
// console.log(cities)
// students.forEach((item) => {
//     console.log(item.city)
// })

const shoppingBill = [
  { name: "Laptop Sleeve", price: 300, quantity: 1 },
  { name: "Wireless Mouse", price: 600, quantity: 2 },
  { name: "USB-C Cable", price: 150, quantity: 3 }
];
function generateBill(billList) {
    console.log("==================== INVOICE =======================")

    // 1. Calculate Subtotal using reduce()
    const subtotal = billList.reduce((acc, item) => {
        acc += item.price * item.quantity
        return acc
    }, 0)

    // 2. Calculate 18% GST Tax
    const tax = subtotal * 0.18;

    // 3. Apply 10% Discount if subtotal is over 1000
    const discount = subtotal > 1000 ? subtotal*0.10 : 0;

    // 4. Calculate final total
    const finalTotal = subtotal + tax - discount;

    // Print Summary Financials
    console.log("----------------");
    console.log(`Subtotal:      ₹${subtotal.toFixed(2)}`);
    console.log(`GST (18%):     ₹${tax.toFixed(2)}`);
    if (discount > 0) {
      console.log(`Discount (10%):-₹${discount.toFixed(2)}`);
    }
    console.log("----------------");
    console.log(`GRAND TOTAL:   ₹${finalTotal.toFixed(2)}`);
    console.log("================");


} 
generateBill(shoppingBill)



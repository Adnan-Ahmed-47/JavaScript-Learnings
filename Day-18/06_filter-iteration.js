// filter

// ------------------------------------------------------------------------------------------------------
// forEach
// Note: As you can see, we printed forEach items, which is fine, but when I store it in a variable, it returned nothing, we got it as undefined. 
// So, forEach will not return any value, even though if we write return keyword also.

// const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })
// console.log(values) // undefined

// ------------------------------------------------------------------------------------------------------
// filter
// NOTE: to overcome the issue of forEach, we have filter, map, which returns the values.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4 ) // so in this case, it will return values, even though we haven't log that value, but still we get, when we store in a variable
// console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]


// const newNums = myNums.filter((num) => {
//     num > 4
// }) // we get empty error, bcoz, we haven't added return keyword here, we also discusses regarding explicit return, either we need to add return keyword or replace {} with ()
// console.log(newNums) // []


// Below 2 works fine
// const newNums = myNums.filter((num) => { // u need to write return when u start a scope
//     return num > 4
// })
// const newNums = myNums.filter((num) => (
//     num > 4
// ))
// console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]

// ------------------------------------------------------------------------------------------------------
// IF u want the above to work, by using forEach, we need to add extra conditionals etc as given below:

// const newNums = []

// myNums.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item)
//     }
// })
// console.log(newNums)


// ==================================== Filter examples =============================================

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
] 

let userBooks = books.filter((book) => book.genre === "History")

userBooks = books.filter((book) => {
    return book.publish >= 1995 && book.genre === "History"
})
console.log(userBooks)


// map

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums = myNums.map((num) => num + 10)
// const newNums = myNums.map((num) => { return num + 10 })
// console.log(newNums)

// =================================== chaining =========================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
                .map((num) => num * 10) // the result array will be passed to second chain.
                .map((num) => num + 1) // here num value will be the above method passed value i.e., 10
                // .filter((num) => num >= 40)

console.log(newNums)

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


const students = [
    {name: "Adnan", marks: 97},
    {name: "Noman", marks: 61},
    {name: "Faizan", marks: 45},
    {name: "Mannan", marks: 99},
    {name: "Ismail", marks: 80},
    {name: "Muneeb", marks: 81},
    {name: "Viqar", marks: 68},
    {name: "Sameer", marks: 53},
    {name: "Mudabbir", marks: 100}
]

const topperStudents = students.filter((item) => (
    item.marks > 80
))
console.log(topperStudents)


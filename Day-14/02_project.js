// Project 2 — Student Result System

// Use your previous student data, but now write functions:

// printAllStudents()
// findTopper()
// findAverageMarks()
// findFailedStudents()
// findStudentsByCity(city)

// For now, it's okay to implement them manually without loops if you want to stay within the concepts you've covered.

// +++++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++

const student_details = [
    {
        name: "Adnan",
        age: 23,
        course: "JavaScript",
        marks: 79,
        city: "Hyderabad"
    },
    {
        name: "Mannan",
        age: 22,
        course: "Java",
        marks: 93,
        city: "Secunderabad"
    },
    {
        name: "Ismail",
        age: 21,
        course: "Kotlin",
        marks: 74,
        city: "Mallepally"
    },
    {
        name: "Mudabbir",
        age: 20,
        course: "Springboot",
        marks: 91,
        city: "Secretariat"
    },
    {
        name: "Sameer",
        age: 25,
        course: "Networking",
        marks: 66,
        city: "Hyderabad"
    },
    {
        name: "Sohaib",
        age: 18,
        course: "System Design",
        marks: 59,
        city: "Golconda"
    },
    {
        name: "Shoeb",
        age: 22,
        course: "Web Dev",
        marks: 39,
        city: "Tolichowki"
    },
    {
        name: "Akbar",
        age: 19,
        course: "Hardware",
        marks: 45,
        city: "Balapur"
    },
    {
        name: "Sufiyan",
        age: 28,
        course: "Cybersecurity",
        marks: 22,
        city: "Hyderabad"
    },
    {
        name: "Rafi",
        age: 21,
        course: "Devops",
        marks: 85,
        city: "Masab Tank"
    }
]

// Print all Students
function printAllStudents() {
    let arrLen = student_details.length;
    const studentsNameList = student_details.forEach((student) => {
        console.log(student.name)
    })
}
printAllStudents()

const studentDirectory = {
    [student_details[0].marks]: student_details[0],
    [student_details[1].marks]: student_details[1],
    [student_details[2].marks]: student_details[2],
    [student_details[3].marks]: student_details[3],
    [student_details[4].marks]: student_details[4],
    [student_details[5].marks]: student_details[5],
    [student_details[6].marks]: student_details[6],
    [student_details[7].marks]: student_details[7],
    [student_details[8].marks]: student_details[8],
    [student_details[9].marks]: student_details[9],
}

// Find the topper
function findTopper() {
    const getTopper = Math.max(student_details[0].marks, student_details[1].marks, student_details[2].marks, student_details[3].marks, student_details[4].marks, student_details[5].marks, student_details[6].marks, student_details[7].marks, student_details[8].marks, student_details[9].marks);

    console.log("The topper of the class: ", studentDirectory[getTopper])
}
findTopper()


// Find Average marks
function findAverageMarks() {
    const getLen = student_details.length;
    const getAverage = student_details[0].marks + student_details[1].marks + student_details[2].marks + student_details[3].marks + student_details[4].marks + student_details[5].marks + student_details[6].marks + student_details[7].marks + student_details[8].marks + student_details[9].marks;

    let finalResult = getAverage/getLen;
    console.log(`Average Marks: ${finalResult}`)
}
findAverageMarks()


// Find failed students
function findFailedStudents() {
    let failedNums = 0;
    student_details.forEach((student) => {
        if(student.marks < 40) {
            failedNums += 1
        }
    })
    console.log(`Failed Students: ${failedNums}`)
}
findFailedStudents()

// Find Students by city
function findStudentsByCity(cityname) {
    const arr = [];
    student_details.forEach((student) => {
        if(student.city === "Hyderabad") {
            arr.push(student)
        }
    })
    console.log(arr)
    arr.forEach(item => console.log(`- ${item}`) )
}
findStudentsByCity("Hyderabad")

// function findStudentsByCity(city) {
//   console.log(`--- Students in ${city} ---`);
  
//   // Step 1: Filter by matching city name
//   const localStudents = student_details.filter(student => student.city.toLowerCase() === city.toLowerCase());
//   console.log(localStudents)
  
//   // Step 2: Print the matches
//   localStudents.forEach(student => console.log(`- ${student.name}`));
// }
// findStudentsByCity("Hyderabad")
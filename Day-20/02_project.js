// Project 2 — Student Management System Pro

// Features:

// Add students.
// Remove students.
// Find topper.
// Find failed students.
// Calculate average.
// Search by city.
// Count students by course.

// Concepts used:

// Arrays
// Objects
// map
// filter
// reduce


// {
//     studentId: "STU-2026-004",
//     name: "Yuki Tanaka",
//     age: 19,
//     city: "Tokyo",
//     course: "Computer Science",
//     grades: 73.0, // Average: 73.0 (Passed)
//     isEnrolled: true
//   },
//   {
//     studentId: "STU-2026-005",
//     name: "Zanele Dlamini",
//     age: 20,
//     city: "Cape Town",
//     course: "Data Science",
//     grades: 87.4, // Average: 87.4 (Passed)
//     isEnrolled: false
//   }

// ++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++++++++

const studentRecords = [
  {
    studentId: "STU-2026-001",
    name: "Aarav Sharma",
    age: 20,
    city: "Mumbai",
    course: "Computer Science",
    grades: 86.6, // Average: 86.6 (Passed)
    isEnrolled: true
  },
  {
    studentId: "STU-2026-002",
    name: "Chloe Dubois",
    age: 21,
    city: "Paris",
    course: "Data Science",
    grades: 94.0, // Average: 94.0 (Topper candidate)
    isEnrolled: true
  },
  {
    studentId: "STU-2026-003",
    name: "Mateo Silva",
    age: 22,
    city: "Mumbai",
    course: "Mechanical Engineering",
    grades: 44.6, // Average: 44.6 (Failed candidate, assuming passing mark is 50)
    isEnrolled: true
  }
];
// console.log("ORGINAL STUDENTS RECORD: ", studentRecords)


// Helper function to find the student
function findStudent(studentId) {
    const student = studentRecords.filter((student) => student.studentId == studentId)
    return student;
}
// console.log(findStudent("STU-2026-001"))


// Feature 1: Add students
// function addStudent(id, name, age, city, course, grades, enrolment) {
function addStudent(...details) { // returns an array with the values
    const studentObj = {
        studentId: details[0],
        name: details[1],
        age: details[2],
        city: details[3],
        course: details[4],
        grades: details[5],
        isEnrolled: details[6]
    }
    // const studentObj = {
    //     studentId: id,
    //     name: name,
    //     age: age,
    //     city: city,
    //     course: course,
    //     grades: grades,
    //     isEnrolled: enrolment
    // }
    studentRecords.push(studentObj)
    return studentRecords
}
console.log(addStudent("STU-2026-004", "Yuki Tanaka", 19, "Tokyo", "Computer Science", 73.0, true))
console.log(addStudent("STU-2026-005", "Zanele Dlamini", 20, "Cape Town", "Data Science", 87.4, false))


// Feature 2: Remove students
function removeStudent(studentId) {
    const studentObjIndex = studentRecords.findIndex((student) => student.studentId == studentId); // 1
    // Check if the item exists (index will be -1 if not found)
    if (studentObjIndex !== -1) {
    studentRecords.splice(studentObjIndex, 1); // Removes 1 item at the specified index
    }
    return studentRecords
}
// console.log(removeStudent("STU-2026-002"))


// Feature 2: Find topper
function findTopper() {
    let topper = studentRecords[0];
    const topperStudent = studentRecords.reduce((acc, student) => {
        if(topper.grades < student.grades) {
            topper = student
        }
    }, topper)
    return topper;
}
// console.log(findTopper())


// Feature 3: Find failed students
function failedStudent() {
    const failure = studentRecords.filter((item) => item.grades < 45)
    return failure
}
// console.log(failedStudent())


// Feature 4: Calculate average
function calculateAverage() {
    let totalAverage;
    let length = studentRecords.length;
    const average = studentRecords.reduce((acc, item) => {
        return acc += item.grades
    }, 0)
    // console.log(average)
    totalAverage = average/length;
    console.log(`The average grades of all the students: ${totalAverage}`)
    return totalAverage;
}
calculateAverage()


// Feature 5: Search by city
function searchByCity(city) {
    const searchCity = studentRecords.filter((student) => student.city === "Mumbai");
    return searchCity
}
console.log(searchByCity("Mumbai"))


// Feature 6: Count students by course
function countStudents(course) {
    let len = 0
    const courseStudents = studentRecords.filter((item) => {
        if(item.course === course) {
            len++
        }
    })
    console.log(`The number of students of ${course}: ${len} `)
}
countStudents("Computer Science")




const student_details = [
    {
        name: "Adnan",
        age: 23,
        course: "JavaScript",
        marks: 99,
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

// Print all students
// console.log(student_details[0])
// console.log(student_details[1])
// console.log(student_details[2])
// console.log(student_details[3])
// console.log(student_details[4])
// console.log(student_details[5])
// console.log(student_details[6])
// console.log(student_details[7])
// console.log(student_details[8])
// console.log(student_details[9])

// Find topper
const highestMark = Math.max(
  student_details[0].marks, student_details[1].marks, student_details[2].marks, student_details[3].marks, 
  student_details[4].marks, student_details[5].marks, student_details[6].marks, student_details[7].marks, 
  student_details[8].marks, student_details[9].marks
);
console.log("Highest Mark:", highestMark); 
console.log("Topper Details:", student_details[0]);

// Find average marks
const totalMarks = student_details[0].marks + student_details[1].marks + student_details[2].marks + 
                   student_details[3].marks + student_details[4].marks + student_details[5].marks + 
                   student_details[6].marks + student_details[7].marks + student_details[8].marks + 
                   student_details[9].marks;

const averageMarks = totalMarks / 10;
console.log("Average Marks:", averageMarks);

// Find failed students
const failedStudents = [student_details[6], student_details[7], student_details[8]]
console.log("Failed Students:", failedStudents);

// Find students from Hyderabad
const hyderabadStudents = [student_details[0], student_details[4], student_details[8]]
console.log("Hyderabad Students:", hyderabadStudents)

// Count total students
console.log("Total Students:", student_details.length)

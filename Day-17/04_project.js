// 4. Student Grade System

// Input:

// marks = 87;

// Output:

// A Grade

// Use:

// functions
// conditionals

// ---------------------------------------- SOLUTION -----------------------------------------

// const marks = 87
// function getGradeByMarks(marks) {
//     if(marks >= 85 && marks <= 100) {
//         console.log("A Grade")
//     } else if(marks >= 75 && marks < 85) {
//         console.log("B Grade")
//     } else if(marks >= 65 && marks < 75) {
//         console.log("C Grade")
//     } else if(marks >= 55 && marks < 65) {
//         console.log("D Grade")
//     } else if(marks >= 45 && marks < 55) {
//         console.log("E Grade")
//     } else {
//         console.log("Fail")
//     }
// }

// getGradeByMarks(87)


// -------------------------------------- Actual Solution --------------------------------------

const student = {
    name: "Adnan",
    marks: 87
}

function calculateGrade(marks) {

    if (marks >= 90) {

        return "A+ Grade";

    } else if (marks >= 80) {

        return "A Grade";

    } else if (marks >= 70) {

        return "B Grade";

    } else if (marks >= 60) {

        return "C Grade";

    } else if (marks >= 35) {

        return "Pass";

    } else {

        return "Fail";

    }

}

// const result = calculateGrade(87);
const result = calculateGrade(student.marks);

console.log(result);


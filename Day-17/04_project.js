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
function getGradeByMarks(marks) {
    if(marks >= 85 && marks <= 100) {
        console.log("A Grade")
    } else if(marks >= 75 && marks < 85) {
        console.log("B Grade")
    } else if(marks >= 65 && marks < 75) {
        console.log("C Grade")
    } else if(marks >= 55 && marks < 65) {
        console.log("D Grade")
    } else if(marks >= 45 && marks < 55) {
        console.log("E Grade")
    } else {
        console.log("Fail")
    }
}

getGradeByMarks(87)


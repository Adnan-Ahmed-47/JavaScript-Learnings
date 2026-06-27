// Object Destructuring:

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course // if u feel that the courseInstructor is very big name in object, so you may also change the name to instructor as given below:
// console.log(courseInstructor)

const {courseInstructor: instructor} = course;

console.log(instructor)


// json format
// {
//     "name": "adnan",
//     "coursename": "js in hindi",
//     "price": "free"
// }
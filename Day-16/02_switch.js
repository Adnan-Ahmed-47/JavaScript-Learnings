// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// --------------------------------------------------------------

// const month = 3

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("february")
//         break;
//     case 3:
//         console.log("march")
//         // break;
//     case 4:
//         console.log("april")
//         break;

//     default: 
//         console.log("default case match")
//         break;
// }
// NOTE: If we comment the break statement from any case, then all the below cases will be executed except default case. Keep in mind except default case.

// ----------------------------------------------------------------------------------

const month = "feb"

switch (month) {
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("february")
        break;
    case "mar":
        console.log("march")
        break;
    case "apr":
        console.log("april")
        break;

    default: 
        console.log("default case match")
        break;
}
// Project 4 — Employee Management

// Create functions:

// findHighestSalary()
// findLowestSalary()
// averageSalary()
// printEmployee(id)
// printAllEmployees()

// ++++++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++

const employees = [
    {
        id: 1,
        name: "Adnan",
        salary: 50000,
        department: "IT",
        joiningDate: "2024-05-01",
        email: "adnan@gmail.com",
        isActive: true
    },
    {
        id: 2,
        name: "Muneeb",
        salary: 80000,
        department: "Non IT",
        joiningDate: "2022-08-27",
        email: "muneeb@gmail.com",
        isActive: true
    },
    {
        id: 3,
        name: "Fayaq",
        salary: 90000,
        department: "IT",
        joiningDate: "2019-03-15",
        email: "fayaq@gmail.com",
        isActive: false
    },
    {
        id: 4,
        name: "Viqar",
        salary: 60000,
        department: "Non IT",
        joiningDate: "2021-10-08",
        email: "viqar@gmail.com",
        isActive: true
    },
    {
        id: 5,
        name: "Firasath",
        salary: 100000,
        department: "IT",
        joiningDate: "2015-02-11",
        email: "firasath@gmail.com",
        isActive: false
    },
    {
        id: 6,
        name: "Ismail",
        salary: 55000,
        department: "Non IT",
        joiningDate: "2022-11-18",
        email: "ismail@gmail.com",
        isActive: true
    },
]


// Find Highest Salary
function findHighestSalary() {
    let getMaxSalary = Math.max(employees[0].salary, employees[1].salary, employees[2].salary, employees[3].salary, employees[4].salary, employees[5].salary)

    console.log(`Highest Salary: ${getMaxSalary}`)
    // employees.forEach((item) => {
    //     if(item.salary === getMaxSalary) {
    //         console.log("Highest Salary: ", item)
    //     }
    // })
}
findHighestSalary()


// Find Lowest Salary
function findLowestSalary() {
    let getMinSalary = Math.min(employees[0].salary, employees[1].salary, employees[2].salary, employees[3].salary, employees[4].salary, employees[5].salary)

    console.log(`Lowest Salary: ${getMinSalary}`)
    // employees.forEach((item) => {
    //     if(item.salary === getMinSalary) {
    //         console.log("Lowest Salary: ", item)
    //     }
    // })
}
findLowestSalary()


// Average Salary
function averageSalary() {
    let getSalaries = 0
    const getLen = employees.length; 

    employees.forEach((item) => {
        const getSal = item.salary;
        getSalaries += getSal
    })
    let res = getSalaries/getLen; 
    console.log(`Average Salary: ${res}`)
}
averageSalary()



// Print employee
function printEmployee(id) {
    employees.forEach((item) => {
        if(item.id === id) {
            console.log("Print employee by id: ", item)
        }
    })
}
printEmployee(5)


// Print all employees
function printAllEmployees() {
    console.log("Print all Employees: ", employees)
}
printAllEmployees()
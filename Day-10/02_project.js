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

// Total employees
console.log("Total Employees: ", employees.length)
// -----------------------------------------------------

// Highest salary
const highestSalary = Math.max(
    employees[0].salary, employees[1].salary, employees[2].salary, employees[3].salary,
    employees[4].salary, employees[5].salary
);
// console.log(highestSalary)
// console.log("Highest salary: ", employees[4].salary);
console.log("Highest salary: ", employees[4]);
// -----------------------------------------------------

// Lowest salary
const lowestSalary = Math.min(
    employees[0].salary, employees[1].salary, employees[2].salary, employees[3].salary,
    employees[4].salary, employees[5].salary
);
// console.log(lowestSalary)
// console.log("Lowest salary: ", employees[0].salary);
console.log("Lowest salary: ", employees[0]);
// -----------------------------------------------------

// Employees in IT department
const itEmployees = [employees[0], employees[2], employees[4]];
console.log("IT Employees: ", itEmployees)
// -----------------------------------------------------

// Search employee by name

console.log(employees.find(u => u.name === "Adnan")); // that name object
// console.log(employees.some(u => u.name === "Adnan")); // true

// -----------------------------------------------------

// Calculate average salary

const employeeLength = employees.length;
const avgSalary = (employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary + employees[4].salary + employees[5].salary)/ employeeLength;
console.log("Average Salary: ", avgSalary)

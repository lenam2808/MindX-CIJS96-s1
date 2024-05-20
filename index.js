// const person1 = {name: "MindX"};
// const person2 = {name: "Code Intensive"};
// const { name } = person1;
// console.log(name)
// const { name: nameOfPerson2 } = person2;
// console.log(nameOfPerson2)

// const coordinate = [1,2]
// const [y,x] = coordinate
// console.log(x,y)

// THỰC HÀNH LESSION 1,2

//Bài 1
const squareNumber = (a) => a * a;
console.log(squareNumber(4));

//Bài 2
const check = (str, p) => {
  if (str.includes(p)) {
    return true;
  } else return false;
};
console.log(check("Hello world!", "world"));

//Bài 3
const addWord = (arr, w) => {
  const length = arr.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    let item = `${w}: ${arr[i]}`;
    newArr.push(item);
  }
  return newArr;
};
console.log(addWord(["one", "two", "three"], "number"));

//Bài 4
const doubleNumber = (arr) => {
  let newArr = arr.map((x) => x * 2);
  return newArr;
};
console.log(doubleNumber([1, 2, 3, 4]));

//Bài 5
const checkOddNumber = (arr) => {
  let newArr = arr.filter((x) => x % 2 !== 0);
  return newArr;
};
console.log(checkOddNumber([1, 2, 3, 4, 5, 6, 7]));

//Bai 6
const employees = [
  { id: 1, name: "John", workingDays: 22, salary: 2000, lateDays: 2 },
  { id: 2, name: "Jane", workingDays: 20, salary: 2500, lateDays: 0 },
  { id: 3, name: "Mark", workingDays: 25, salary: 3000, lateDays: 1 },
  { id: 4, name: "John", workingDays: 0, salary: 2200, lateDays: 0 },
];
// let sum = 0;
// for (let { workingDays } of employees) {
//   sum += workingDays;
// }
// console.log(sum);  

const totalWorkingDays = employees.reduce((sum, employee) => {
  let total = sum + employee.workingDays;
  return total
}, 0)

console.log(totalWorkingDays)

//Bai 7
// const highestSalary = Math.max.apply(Math, employees.map(employee => {
//     return employee.salary
// }))
// console.log(highestSalary)
let max = 0;
for (let { salary } of employees) {
  if (salary > max) {
    max = salary;
  }
}
console.log(max);
let highestSalaryEmployee = employees.find(employee => (employee.salary == max))
console.log(highestSalaryEmployee)
// for (let { id, name, salary } of employees) {
//   if (salary == max) {
//     console.log(`id: ${id}, name: ${name}, salary: ${salary}`);
//   }
// }

//Bai 8
let highestWorkDays = 0;
for (let { workingDays, lateDays } of employees) {
  let workDays = workingDays - lateDays;
  
  // console.log(workDays)
  if (workDays > highestWorkDays) {
    highestWorkDays = workDays;
  }
}

let wordhardEmployee = employees.filter((employee) => {
    let workDays = (employee.workingDays - employee.lateDays)
    // console.log(workDays)
    if(workDays == highestWorkDays) {
      return `id: ${employee.id}, name: ${employee.name}, workingDays: ${employee.workingDays}, lateDays: ${employee.lateDays}`
    }
  })
  console.log(wordhardEmployee)

// for (let { id, name, workingDays, lateDays } of employees) {
//   let workDays = workingDays - lateDays;
//   if (highestWorkDay == workDays) {
//     console.log(
//       `id: ${id}, name: ${name}, workingDays: ${workingDays}, lateDays: ${lateDays}`
//     );
//   }
// }

//Bai 9
// const groupEmployees = 


// groupEmployees();
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
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// let max = employees[0].salary;
// let indexMax = 0;

// for (let i=0; i<employees.length; i++) {
//     const element = employees[i];
//     if(element.salary > max) {
//         max = element.salary;
//         indexMax = i;
//     }
// }
// console.log(employees[indexMax])

//Bai 8
// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//   { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//   { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let max = employees[0].workingDays - employees[0].lateDays;
// let indexMax = 0;

// for (let i=0; i<employees.length; i++) {
//   const element = employees[i];
//   const worked = element.workingDays - element.lateDays;
//   if(worked > max) {
//       max = worked;
//       indexMax = i;
//   }
// }
// console.log(employees[indexMax])

//Bai 9
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const result = {};

// const listName = employees.map(item => item.name)

// listName.forEach((item, idx) => {
//     if(!result[item]) {
//         result[item] = [];
//     }
//     result[item].push(employees[idx])
// })

// console.log(result)

//Bai 10
// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//   { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//   { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let max = employees[0].workingDays / employees[0].salary;
// let indexMax = 0;

// for (let i=0; i<employees.length; i++) {
//     const element = employees[i];
//     const result = element.workingDays / element.salary;
//     console.log(result)
//     if(result > max) {
//         max = result;
//         indexMax = i;
//     }
// }
// console.log(employees[indexMax])

//Bai 11

// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const result = {};

// employees.forEach(item => {
//     if(!result[item.workingDays]) {
//         result[item.workingDays] = 0;
//     }
//     result[item.workingDays]++;
// })
// console.log(result)

//Bai 12
// const employees = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     workingDays: 22,
//     lateDays: 2,
//     salary: 2000,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     email: "jane@example.com",
//     workingDays: 20,
//     lateDays: 0,
//     salary: 2500,
//   },
//   {
//     id: 3,
//     name: "Mark",
//     email: "mark@example.com",
//     workingDays: 25,
//     lateDays: 1,
//     salary: 3000,
//   },
// ];

// const newArr = employees.map((item) => {
//   return {
//     name: item.name,
//     email: item.email,
//     workInfo: {
//       workingDays: item.workingDays,
//       lateDays: item.lateDays
//     }
//   }
// })

// console.log(newArr)

//Bai13
let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { 
    name: "Đọc sách", 
    description: "Đọc xong chương 3", 
    completed: true 
  },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];

const addTask = (name, desc, status) => {
  const newTask = {
    name: name,
    description: desc,
    completed: status
  };
  tasks.push(newTask);
}

addTask("choi game","aaa",false)
console.log(tasks)

const checkCompleted = (...args) => {
  tasks.forEach(item => {
    args.forEach(arg => {
      if(item.name === arg) {
        item.completed = true;
      }
    })
  })
}

checkCompleted("Đi mua hàng", "Hoàn thành bài tập JavaScript")
console.log(tasks)

const sortTask = () => {
  tasks.sort((a,b) => a.name.localeCompare(b.name))
}

sortTask()
console.log(tasks)

const reverseTask = () => {
  tasks.sort((a,b) => b.name.localeCompare(a.name))
}
reverseTask();
console.log(tasks)
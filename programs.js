/*************************************************
 QUESTION 1 — Variables and Output
*************************************************/

let name = "Thanvith";
let age = 20;

console.log("Hello " + name + ", you are " + age + " years old.");


/*************************************************
 QUESTION 2 — Functions: Calculator
*************************************************/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


/*************************************************
 QUESTION 3 — Conditional Statements
*************************************************/

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(10);


/*************************************************
 QUESTION 4 — Loops and Iteration
*************************************************/

// Print 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Print even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


/*************************************************
 QUESTION 5 — Arrays
*************************************************/

let students = ["Aman", "Riya", "Kiran", "Neha", "Rahul"];

students.push("Sita");      // Add student
students.splice(2, 1);      // Remove one student

console.log("Student List:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


/*************************************************
 QUESTION 6 — Objects
*************************************************/

let user = {
    name: "Thanvith",
    email: "thanvith@gmail.com",
    password: "12345",
    age: 20
};

console.log("User Name:", user.name);

user.email = "newemail@gmail.com";  // Update email
user.isAdmin = false;               // Add new property

console.log("Updated User Object:", user);


/*************************************************
 QUESTION 7 — To-Do List (CRUD Operations)
*************************************************/

let todos = [];

function addTask(task) {
    todos.push(task);
}

function viewTasks() {
    console.log("To-Do List:");
    for (let i = 0; i < todos.length; i++) {
        console.log(i + ": " + todos[i]);
    }
}

function updateTask(index, newTask) {
    todos[index] = newTask;
}

function deleteTask(index) {
    todos.splice(index, 1);
}

// Testing To-Do
addTask("Study JavaScript");
addTask("Workout");
viewTasks();

updateTask(0, "Study React");
deleteTask(1);
viewTasks();


/*************************************************
 QUESTION 8 — JSON Operations
*************************************************/

let userObj = {
    name: "Thanvith",
    age: 20,
    email: "thanvith@gmail.com"
};

let jsonString = JSON.stringify(userObj);
console.log("JSON String:", jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("Converted Object Name:", parsedObj.name);


/*************************************************
 QUESTION 9 — Asynchronous Programming
*************************************************/

console.log("Start");

setTimeout(function() {
    console.log("Data Loaded");
}, 2000);

console.log("End");


/*************************************************
 QUESTION 10 — Async/Await and Promises
*************************************************/

function fetchUser() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                name: "Thanvith",
                age: 20
            });
        }, 2000);
    });
}

async function getUserData() {
    console.log("Fetching user...");
    let user = await fetchUser();
    console.log("User Data:", user);
}

getUserData();
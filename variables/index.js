// Variable =  A container that stores a value
//            Behaves as if it were the value it containes

//1. Declaration  let x;
// 2. assignment x = 100;

//number
let x;
x = 100;
let age = 20;
let price = 10.99;
let gpa = 3.95;
console.log(x); // display x on Console
console.log('My age is ' + age + ' years old!');
console.log(`This ball has a price $${price}`);
console.log(`My GPA at first semester in SAIT was ${gpa}/4.0`); // formating need to have dollar symbol
console.log("Type of GPA: " + typeof gpa);
//String
let firstName = 'Vinh';
let lastName = 'Phan';
let favoriteFood = 'Banh Mi';
let email = 'vinh.phan@gmail.com'
console.log('Type of First Name' + typeof firstName);
console.log(`My name is ${firstName} ${lastName}`);
console.log(`My favorite food is ${favoriteFood}`);
console.log(`My email: ` + email);

//boolean
let online = true;
let forSale = true;
let isStudent = true;
console.log("type of Online: " + typeof online);
console.log(`Vinh is online: ${online}`);
console.log(`Is this call for sale? ${forSale}`);
console.log(`Is this student enroll? ${isStudent}`);

let fullName = firstName + ';' + lastName;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `Is the student? ${isStudent}`;

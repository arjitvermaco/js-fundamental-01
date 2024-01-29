// Link a js file 
console.log("Welcome to JS fundamentals Part 1")


//Value and Variables
console.log("Arjit");
console.log(99);

let firstName = "Arjit";

console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

//Variable name con
// pascal case 
let my_name = "arjit verma";
console.log(my_name)

let $name = "arjit verma";
console.log($name)

let name = "arjit verma";
//Camel case - we prefer this in js
let fullName = "Arjit Verma";

let job1 = "Developer";
let job2 = "Trainer";
// name should be descreptive 
let myFirstJob = "Developer";
let myCurrentJob = "Trainer";

const PI = 3.141592653589793;

console.log(PI);

// PI = 2.22;

myCurrentJob = "Manager";
console.log(myCurrentJob);

///////////////////////////////
// Data Type 

let codingIsFun = true;
console.log(typeof codingIsFun);
console.log(typeof 22)
console.log(typeof "arjit");

let currentYear;
console.log(typeof currentYear)

currentYear = 2024;
console.log(typeof currentYear)

let myAge = null;
console.log(typeof myAge)


//let var const 
let age = 40;
// not allowed /
// let age = 42;
age = 43;

var birthYear = 1991;
var birthYear = 1995;
birthYear = 1992;
console.log(birthYear);

// const myName = "arjit";
// myName = "Arjit";

//Operations
//MATH Operations

let today = 2024;
let myCurrentAge = today - 1991;
// console.log(myCurrentAge);

let amanAge = today - 1997;
console.log(amanAge, myCurrentAge);

console.log(myCurrentAge * 2);
console.log(myCurrentAge / 2);
console.log(2**3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


let term1 = "I Love 💖";
let term2 = "Javascript";
let phrase = term1 + " " + term2;
console.log(phrase);

// Assigment
let x = 10+5; //15
x += 10; //x = x+10
x *= 4; //x = x*4
x++; //x = x +1 
x--;//x = x -1;
x--;
console.log(x);

//Comparision
// >, < ,>= , <=
console.log(myCurrentAge > amanAge);
console.log(amanAge >=30)
console.log(myCurrentAge != amanAge);

// Precedence
// BODMAS 
let avgAge = (myCurrentAge + amanAge)/2;
let z = (10+4)/7 * 8;
console.log(z);

//// Template Literals 

let studentName = "Ankit Singh";
let studentBirthYear = 1997;
let studentAge = today - studentBirthYear;
let studentLocation = "Bangalore";

let aboutStudent = "Hi, I am \n\ " + studentName +
 " and I am \n\ " + studentAge + " years old. I live in " + studentLocation;

console.log(aboutStudent)


let newAboutStudent = `Hi , 
I am ${studentName} and 
I am ${studentAge} years old.
I live in ${studentLocation}`

console.log(newAboutStudent);


// Decision Making - if/else statements

const userAge  = 15;

if(userAge >= 18){
    console.log("User is allowed to drive 🚗")
}else{
    console.log("User is not allowed to drive 🚫")
}

//Type Conversion
//We as a developer convert one data type to another

let ageInString = "20";
let ageInNumbers = Number(ageInString);
console.log(ageInString)
console.log(ageInNumbers)

console.log(Number("42"))
console.log(Number("Arjit"))
console.log(typeof NaN)


console.log(String(23))

// Type Coercion 
//When js engine tried to convert one datatype
// to another 

console.log('I am '+ 33 + 22 + ' Years old');
// in case of + num => string

console.log('23' - '10' - 4);
console.log('24'/'2')
//In case of - * or / string => number

let num = '1' + 1; //11 
console.log(num);
num = num -1;
console.log(num);

let value = 12.32423423;

console.log(parseInt(value))
console.log(Number(value))

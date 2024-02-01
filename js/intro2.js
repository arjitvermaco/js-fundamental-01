//Truthy and Falsy values
// 5 falsy values in js 
// 0 , '' , undefined , null , NaN
console.log(Boolean(0)) 
console.log(Boolean(''))
console.log(Boolean(undefined)) 
console.log(Boolean(null)) 
console.log(Boolean(NaN)) 
console.log(Boolean("hello"))
console.log(Boolean({}))

const moneyInMyBank = 0;

if(moneyInMyBank){
    console.log("Dont spend it all")
}else{
    console.log("You dont have money in your bank")
}
// let canDrive = true;

// console.log(canDrive)

// if(canDrive){
//     console.log("You can drive")
// }else{
//     console.log("You cant drive")
// }


//Equality Operator == , ===
let myAge = '18';
// == > only checks for values 
if(myAge == 18){
    console.log("You are 18 years old - 1st loose")
}
// checks for value and type also

if(myAge === 18){
    console.log("You are 18 years old - 2nd strict")
}

// let favNum = Number(prompt("What is your favourite number?"))
// console.log(favNum)

// if(favNum === 10){
//     console.log("You are a genius")
// }else if(favNum === 7){
//     console.log("You are amazing")
// }else{
//     console.log("You are okay")
// }
// if(favNum !=10){
//     console.log("You are not a genius")
// }

// if( favNum !== 10) console.log("You are not a genius")

//Logical Operators
let userAge = 0;
let canDrive = false;

// &&  and  ||
// && => returns first falsy value 
// or it returns the last value in case of all 
// truthy values
console.log(userAge && canDrive)

if(userAge > 18 && canDrive){
    console.log("You can drive")
}else{
    console.log("You cant drive")
}


// || => returns the first truthy value or
// returns the last value 

console.log(userAge || canDrive)

let userIsTired = true;
console.log(userAge || canDrive || userIsTired)

// Switch Case
const day = "friday";
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//   } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   } else if (day === 'friday') {
//     console.log('Record videos');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
//   } else {
//     console.log('Not a valid day!');
//   }
  
switch(day){
    case'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case'saturday':
    case'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

//Ternary Operator 
//condition? true : false

let age = 12;

age>18? console.log("You are old") : console.log("You are young");

let allowedToVote = age>18? true : false;



//Functions 

// console.log("My Name is Arjit")

// console.log("My Name is Arjit")
// console.log("My Name is Arjit")
// console.log("My Name is Arjit")
// console.log("My Name is Arjit")
// console.log("My Name is Arjit")

//Declaring a function
function logMyName(){
console.log("My Name is Arjit")
}

//Calling / Envoke / Run
logMyName();
logMyName();
logMyName();
logMyName();
logMyName();
logMyName();
logMyName();

function addTwoNumbers(num1, num2){
    console.log("Value of num1", num1)
    console.log("Value of num2", num2)
    console.log(num1 + num2)
    return num1 + num2

    console.log("Hello this is arjit")
}

let sum = addTwoNumbers(10,20)
console.log("Value of sum", sum)

const num = Number('22');

//Function declaration vs Function Expression
let age1 = calculateAge1(1990)
//Function declaration
function calculateAge1(age){
    return 2024- age
}


//Function expression
const calculateAge2 = function(age){
    return 2024- age
}

let age2 = calculateAge2(1994)
console.log(age1,age2)

//Arrow Function

// const calculateAge3 = (age)=>{
//     return 2024- age;
// }

const calculateAge3 = (age) => 2024- age;
console.log(calculateAge3(1978))


function calculateAge4(year){
    let userAgeNow = 2024- year;
    console.log(userAgeNow)
    return userAgeNow
}

let userAgeNow = calculateAge4(1990);
console.log(userAgeNow)

let newUserAgeNow = calculateAge4(1999);
console.log(newUserAgeNow)

var a = 10;
console.log(window)


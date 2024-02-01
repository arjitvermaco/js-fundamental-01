//Intro Array
let student1 = "Jane";
let student2 = "John";
let student3 = "Jill";
let student4 = "Jessica";

let studentArray = ["Jane", "John", "Jill", "Jessica"];
console.log(studentArray);

let allStudents = new Array("Jane", "John", "Jill", "Jessica");
console.log(allStudents);

console.log(studentArray === allStudents);

console.log(studentArray[0])
console.log(studentArray[2])

console.log(studentArray.length)
console.log(studentArray[studentArray.length -1])

studentArray[1] = "Jim";
console.log(studentArray);

const firstName = "Arjit";
const birthYear = 1992


// console.log(arjit);
// console.log(arjit[4][1]);
// console.log(arjit.length);

//Array Operations
//Add Element To Array
studentArray.push("Jimmy");
console.log(studentArray);

let newLength = studentArray.unshift("James");
console.log(studentArray);
console.log(newLength);

//Remove Element
// Remove last
let elRemoved = studentArray.pop();
console.log(studentArray);
console.log(elRemoved);

//Remove First
elRemoved = studentArray.shift();
console.log(studentArray);
console.log(elRemoved);

console.log(studentArray.indexOf("Jill")); //Returns index as a num
console.log(studentArray.indexOf("Jessica"));
console.log(studentArray.indexOf("Rahul"));//Returns -1 if el doesnt exists

console.log(studentArray.includes("Jessica"));//Returns Boolean
console.log(studentArray.includes("Rahul"));//Returns Boolean

if(studentArray.includes("Jessica")){
    console.log("Jessica is in the list");
}else{
    console.log("Jessica is not in the list");
}


//Intro To Objects
// Objects are collection of key:value pairs 

// const arjit = [firstName, 2024 - birthYear, "Male", "India",studentArray];

const arjit = {
    firstName: "Arjit",
    lastName:"Verma",
    birthYear: 1992,
    gender: "Male",
    country: "India",
    favouriteSubjects: ["Maths", "Physics", "Chemistry"],
    canDrive : true,
}
console.log(arjit)
//To Access elements from an Object
//Dot Notation and Bracket Notation 
console.log(arjit.firstName);

console.log(arjit.favouriteSubjects);
console.log(arjit.favouriteSubjects[0]);

//Bracket Notation

const nameKey = "Name";

console.log(arjit["firstName"]);
console.log(arjit["first"+nameKey])
console.log(arjit["last"+nameKey])
console.log(arjit["favouriteSubjects"]);
console.log(arjit["favouriteSubjects"][0]);

console.log(arjit.favColor);

//Add New Element
arjit.favColor = "Green";
arjit["favBrand"]= "Tata"
console.log(arjit);


const triangle = {
    name: "Triangle",
    base: 3,
    height: 4,
    area: function(){
        console.log("values of this in triangle Obj is:",this)
        return this.base * this.height / 2;
    },
    // summary:function(){
    //     return `This is a ${this.name} with a base of ${this.base}
    //     and height of ${this.height}`;
    // },
    summary:()=>{
        console.log("values of this in triangle Obj is:",this)
        return `This is a ${triangle.name} with a base of ${triangle.base}
        and height of ${this.height}`;
    }

}

console.log(triangle.area());

const triangleArea = triangle.area();
console.log(triangleArea);
console.log(triangle.summary());


//Iterations : For Loop
// console.log("Lifting weights rep : 1 🏋️‍♀️");
// console.log("Lifting weights rep : 2 🏋️‍♀️");
// console.log("Lifting weights rep : 3 🏋️‍♀️");
// console.log("Lifting weights rep : 4 🏋️‍♀️");
// console.log("Lifting weights rep : 5 🏋️‍♀️");
// console.log("Lifting weights rep : 6 🏋️‍♀️");
// console.log("Lifting weights rep : 7 🏋️‍♀️");
// console.log("Lifting weights rep : 8 🏋️‍♀️");

//For Loop
// This loop will keep on running till a condition is TRUE
// for(let i = 1; i <= 20; i++){
//     console.log(`Lifting weights rep : ${i} 🏋️‍♀️`);
// }


for(let i = 20; i >= 1; i--){
    console.log(`Lifting weights rep : ${i} 🏋️‍♀️`);
}

//Create a dummy array with 10 elements
const colorsArray = ["Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Orange", "Purple", "Black", "White"];

// for (let i= 0;i<colorsArray.length;i++){
//     console.log(colorsArray[i]);
// }

// for (let i= colorsArray.length;i>=0;i--){
//     console.log(colorsArray[i]);
// }

//Continue and Break

// for (let i= 0;i<colorsArray.length;i++){
//     if(colorsArray[i] === "Blue"){
//         continue;
//     }
//     console.log("Current Index is :",i)
//     console.log(colorsArray[i]);

// }

for (let i= 0;i<colorsArray.length;i++){
    if(colorsArray[i] === "Blue"){
        break;
    }
    console.log("Current Index is :",i)
    console.log(colorsArray[i]);

}

//While loop
let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights rep : ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while(dice !==6){
    console.log('You rolled a ',dice);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice === 6){
        console.log('You Win');
    }
}
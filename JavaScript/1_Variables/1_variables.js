// one line comment


/* 
    here is a multiple line comment
    another comment here
*/

// 1 ------- VAR --------
var oddNumber = 11;
console.log(oddNumber);
var evenNumber;
evenNumber = 20;
console.log(evenNumber);

var specialVariable = null;
console.log(specialVariable);

// do not recommend
//var num1 = 100, num2 = 101, num3 = 103;
var num1 = 100;
var num2 = 101;
var num3 = 102;

// variable redeclaration
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);

// variable reassignment
var myNumber = 9;
myNumber = 19;


// -------- 2. LET --------
let firstName = 'Bronco';
let lastName = 'CPP';
let anotherFullName = firstName + lastName;
console.log(anotherFullName);

let fulName = `Full name is ${firstName} ${lastName}`;
console.log(fulName);

let magicNumber;
magicNumber = 13;

// -------- 3. CONST ---------
const PI_NUMBER = 3.14;

// -----Object-----
let userCustomizedChoice = "customized username"
let cppCourse = {
    name: 'CS 2250',
    'hours': 3,
    semester: 2025,
    'school name': 'Cal Poly Pomona',
    [userCustomizedChoice]: "User name",

}

console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse['school name']);
console.log(cppCourse[userCustomizedChoice]);


cppCourse.name = 'Web Development';
cppCourse["school name"] = 'CPP';
console.log(cppCourse);

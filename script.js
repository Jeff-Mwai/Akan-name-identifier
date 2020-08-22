/* let males = {
    Sunday: "Kwasi",
    Monday: "Kwandwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday:"Yaw",
    Friday: "Kofi",
    Saturday: "Kwame",
};
let females = {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday:"Afua",
    Friday: "Kofi",
    Saturday: "Ama",
};

let dateOfBirth = prompt("Enter date of birth: ");
let CC = century;
let YY = year;
let MM = month;
let DD = dayBorn;

var d = new date ();
var weekday = new array (7);
weekday [0] = "Sunday";
weekday [1] = "Monday";
weekday [2] = "Tuesday";
weekday [3] = "Wednesday";
weekday [4] = "Thursday";
weekday [5] = "Friday";
weekday [6] = "Saturday";

alert(weekday [0]); */


var day='';
var CC=19;
var YY=96;
var MM=12;
var DD=04;
var dateOfBirth = "";
var arrDate ="";
var year = "";
dateOfBirth = document.getElementById("exampleInputDateOfBirth");

(day) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

console.log("Day is"+day);
/* switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} */

arrDate = dateOfBirth.split("/");

/* mm/dd/yyyy */

MM = arrDate[0];
DD = arrDate[1];
year = arrDate[2];
YY = year.substring(2, 4);
CC = year.substring(0, 2);


function fnGetDay(){
    /* switch(){
    } */
    day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

switch(day) {
  case 0:
    // code block
    break;
  case 1:
    // code block
    break;

     case 1:
    // code block
    break;

     case 1:
    // code block
    break;

     case 1:
    // code block
    break;
    
  default:
    // code block
} 

        
}
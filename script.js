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


var day=0;
var CC=0;
var YY=0;
var MM=0;
var DD=0;
var dateOfBirth = "";
var arrDate ="";
var year = "";
var gender="";

var name ="";

function fnSubmit(){

 gender = document.getElementById("male").value;
dateOfBirth = document.getElementById("exampleInputDateOfBirth");
arrDate = dateOfBirth.split("/");

/* mm/dd/yyyy */

MM = arrDate[0];
DD = arrDate[1];
year = arrDate[2];
YY = year.substring(2, 4);
CC = year.substring(0, 2);



     /*    An invalid day should be (d<=0) or (d>31)

        An invalid month should be (m<= 0) or (m > 12)   */


      if (DD<=0|| DD>31){
                alert("Invalid Date inputed");
      }else if (MM<=0|| MM>12) {
                alert("Invalid Month inputed")   
      }else{
                fnGetDay();
      }



}




function fnGetDay(){
    /* switch(){
    } */
    day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

switch(day.toFixed()) {
  case 0:
    // code block
    if(gender === "F"){
        name="Akosua";
    }else{
        name="Kwasi";
    }
    break;
  case 1:
    if(gender === "F"){
        name="Adwoa";
    }else{
        name="Kwadwo";
    }
    break;

     case 2:
    // code block
      if(gender === "F"){
        name="Abenaa";
    }else{
        name="Kwadwo";
    }
    break;

     case 3:
    // code block
      if(gender === "F"){
        name="Akua";
    }else{
        name="Kwaku";
    }
    break;

     case 4:
    // code block
      if(gender === "F"){
        name="Yaa";
    }else{
        name="Yaw";
    }
    break;

    case 5:
    // code block
      if(gender === "F"){
        name="Afua";
    }else{
        name="Kofi";
    }
    break;
    case 6:
    // code block
      if(gender === "F"){
        name="Ama";
    }else{
        name="Kwane";
    }
    break;


    alert ("Your Name is"+name);

} 

        
}
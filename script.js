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
dateOfBirth = document.getElementById("dob").value;

console.log("DOB"+dateOfBirth + 'gender '+gender);
arrDate = dateOfBirth.split("-");

/*  yyyymmdd*/

MM = arrDate[1];
DD = arrDate[2];
year = arrDate[0];
YY = year.substring(2, 4);
CC = year.substring(0, 2);
console.log("Year is "+YY+ "Cc "+CC+"MM"+MM+"DD"+DD);

      if (DD<=0|| DD>31){
                alert("Invalid Date inputed");
      }else if (MM<=0|| MM>12) {
                alert("Invalid Month inputed")   
      }else{
                fnGetDay();
               
      }



}




function fnGetDay(){

day= new Date (dateOfBirth);
  
  day = day.getDay()

   
 
    console.log("Date before conversion "+day);
   

switch(day) {
  case 0:
    // code block
   

        if(gender === "F"){
        name="Akosua";
    }else{
        name="Kwasi";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;
  case 1:
    if(gender === "F"){
        name="Adwoa";
    }else{
        name="Kwadwo";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;

     case 2:
    // code block
      if(gender === "F"){
        name="Abenaa";
    }else{
        name="Kwabena";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;

     case 3:
    // code block
      if(gender === "F"){
        name="Akua";
    }else{
        name="Kwaku";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;

     case 4:
    // code block
      if(gender === "F"){
        name="Yaa";
    }else{
        name="Yaw";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;

    case 5:
    // code block
      if(gender === "F"){
        name="Afua";
    }else{
        name="Kofi";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;
    case 6:
    // code block
      if(gender === "F"){
        name="Ama";
    }else{
        name="Kwame";
    }
     alert ("Your Name is"+name);
    console.log("Name is"+name);
    break;

   default:
    console.log("default");
    break;

} 
 

        
}
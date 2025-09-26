// --------------------------
// 🔹 Else-if Practice
// --------------------------

// 1. check number positive ,negative , zero . 
let num = 1000;
if (num>0){
    console.log("its positive")
}else if(num===0){
    console.log("its zero")
}else{
    console.log("its negative")
}

// 2.check grade system . 
let marks = 100 ;

if(marks>=90 && marks<=100){
    console.log("A")
}else if(marks>=80 && marks<=89){
    console.log("B")
}else if(marks>=70 && marks<=79){
    console.log("C")
}else if(marks>=60 && marks<=69){
    console.log("D")
}else{
    console.log("Fail")
}

// 3. check the month 
let monthnum = 12;

if(monthnum ===1){
    console.log("January")
} else if(monthnum===2){
    console.log("February")
}else if(monthnum ===3){
    console.log("March")
}else if(monthnum ===4){
    console.log("April")
}else if(monthnum ===5){
    console.log("May")
}else if(monthnum ===6){
    console.log("June")
}else if(monthnum ===7){
    console.log("July")
}else if(monthnum ===8){
    console.log("August")
}else if(monthnum ===9){
    console.log("August")
}else if(monthnum ===10){
    console.log("October")
}else if(monthnum ===11){
    console.log("November")
}else if(monthnum ===12){
    console.log("December")
}


// 4.  time  in 24hr format (0-23) print . 
let time = 23 ;

if(time>=0 && time<=11){
    console.log("Good morning")
}else if(time>=12 && time<=17){
    console.log("Good Afternoon")
}else if(time>=18 && time<=20){
    console.log("Good Evening")
}else if(time>=21 && time<=23){
    console.log("Good Night")
}

// 5. check number divisble . 
let check = 15 ;
if(check%3==0 && check%5==0){
    console.log("divisble by 3 and 5")
}else if(check%3===0){
    console.log("divisble by 3")
}else if(check%5===0){
    console.log("divisble by 5 ")
}


let temp = "50";

if(temp<0){
    console.log("Freezing")
} else if(temp>=1 && temp <=15){
    console.log("Cold")
}else if(temp>=16 && temp <=30){
    console.log("Normal")
}else if(temp>=31 && temp <=40){
    console.log("Hot")
}else {
    console.log("very hot")
}
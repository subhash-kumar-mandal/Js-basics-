// ----------------
// 🔹 Nested if-else
// ----------------

// 1. check Password input लो और चेक करो:

// अगर खाली है → "Enter password"
// अगर length < 6 → "Too short"
// वरना "Password accepte

let password = "";

if(password === ""){
    console.log("Enter password")
}else if(password.length<6){
    console.log("password to short")
}else{
    console.log("password accepted")
}



// 2. किसी character को input लो और चेक करो vowel है या consonant।
let check = (input1) => {
    let input = input1.toLowerCase() 
    if(input==="a" ||input==="e" ||input==="u" ||input==="i" || input==="o"){
        console.log("yes vowel")
    }
}

check("a")



// 3. दो नंबर लो और चेक करो equal हैं या कौन बड़ा है। 

let num1 = 10;
let num2 =10;

if(num1===num2){
    console.log("numbers equal");
}else if(num1>num2){
    console.log(`${num1} bada hai ${num2} se`)
}else{
      console.log(`${num2} bada hai ${num1} se`)
}



// 4. age लो और life stage बताओ:

let age = 10;
if(age<13){
    console.log("Child")
}else if(age>=13 && age<=19){
    console.log("Teen")
}else if(age>=20 && age<=59){
    console.log("Adlut")
}else{
    console.log("Senior citizen")
}


// 5.check number prime ?


let find = (check) =>{
let condition = true
for(let j=2;j<check;j++){
    if(check%2===0){
      console.log("not prime")
      condition =false
      break;
    }
}
if(condition) console.log("yes prime")
}

// find(7)



// 6.Calculator बनाओ: दो नंबर और एक operator (+, -, *, /) लो और result दिखाओ।

function calculator(num,num1,work){
    switch(work){
        case "+" : console.log(num+num1)
        break ;
         case "-" : console.log(num-num1)
        break ;
         case "*" : console.log(num*num1)
        break ;
         case "/" : console.log(num/num1)
        break ;
    }
}

calculator(10,20,"*")
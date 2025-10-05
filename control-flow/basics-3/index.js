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
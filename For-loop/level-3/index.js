// -----------------------
// 🔹 Intermediate 3
// -----------------------

// 1. find sum any arrays

let find_sum  = (arra) => {
    let sum =0 ;
    for(let i=0;i<arra.length;i++){
        sum += arra[i]
    }
    return console.log(sum)
}

find_sum([1,2,3,45,5,6])

// 2. find minimum element in array

let mini = (arra)=>{
let mini =arra.reduce((curr,sec) =>{
    if(curr<sec){
        return curr
    }else{
        sec
    }
})
return mini
}
console.log(mini([1,2,3,45,6,7]))


// 3. count even or odd number 

function count(arra){
    let even = 0;
    let odd = 0;
    for(let j=0;j<arra.length;j++){
        if(arra[j]%2===0){
            even++
        }else{
            odd++
        }
    }
  return `even count ${even} and odd count ${odd}`
}
console.log(count([1,2,3,45,6,7]));



// 4.count vowels 
let vowels =(str1) => {
    let count = 0;
    let str = str1.toLowerCase()
    for(let i=0;i<str.length;i++){
        if(str[i] ==="a" || str[i] ==="e" ||str[i] ==="i" || str[i] ==="u"||str[i] ==="u"){
          count++
        }
    }

    return `vowel count ${count}`
}

console.log(vowels("javascript"))
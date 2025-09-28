// ------------------------
// 🔹 Basics (Level 1)
// ------------------------

// 1. 1 to 10 number print . 
for(let i= 1 ; i<11 ;i++){
    console.log(i)
}


// 2. 1 to 100 print all even number . 
for (let i =1 ;i<=100;i++){
    if(i%2===0){
        console.log(i)
    }
}

// 3. 1 to 50 print all odd number . 
for(let i=1;i<=50;i++){
    if(i%2!==0){
        console.log(i)
    }
}

// 4. 10 to  1  reverse  numbera print . 
for(let i= 10;i>=1;i--){
    console.log(i)
}

// 5. n number ka table print karo . 
let n = 5 ;
for(let i=1;i<=10;i++){
    console.log(i*n)
}

// 6 . 1 to 10 number ka sum find ? 
let sum = 0 ;
for(let i=1;i<=10;i++){
    sum += i
}
// console.log(sum)  // 55 


// 7. find factorial 1 to  10  number . 
let factorial = 1
for(let i=1;i<=10;i++){
    factorial = factorial*i
    console.log(`${i} factorial -> ${factorial}`)
}

// 8. print the number divisible only 3 . 
for(let i=1;i<50;i++){
    if(i%3===0){
        console.log(i)
    }
}


// 9.  print any string all alphabet. 
let str = "helloworld";
for(let i=0;i<str.length;i++){
    console.log(str[i])
}

// 10. print array all element . 
let arra = [1,2,3,4,5,6];
for(let i=0;i<arra.length;i++){
    console.log(arra[i])
}
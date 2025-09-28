// ---------------------
// 🔹 Intermediate (Level 2)
// ---------------------

// 1. sum to all n numbers 
let n = 6 
let sum = 0
for(let i=1;i<=n;i++){
    sum = i + sum
}
console.log(sum) //21 

// 2. find array maximum element . 
let arra = [1,3,2,5,6,7,8,9];
let max = -Infinity;
for(let i=0;i<arra.length;i++){
    if(arra[i]>max){
        max = arra[i]
    }
}
console.log(max) //9
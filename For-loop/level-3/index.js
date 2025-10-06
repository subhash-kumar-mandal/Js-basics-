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
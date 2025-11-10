// TDZ --> ek esi place jaha variable decration hote but use nhi kar sakte hai 
// console.log(a) // can not access
let a =10; // meromey mein a bana host hua but a=10 voli line excut nhi hoti TDZ mein aa jata hai
 
// console.log(b);  var bhi host hota hai but undefind ke roop mein 
var b=20;

// TDZ--- js engine
    //   variable and function ko host karta hai 
    //   js declreaction ko note karta hai 
    //   line to line excution phase 

// let and const ko direct value nhi di jati hai  
// var kko  js undefined se Initialize 
// let or const to variable meromey mein reseve hote hai  but access nhi kar sakte hai


// TDZ block scope mein hi kaam karta hai 

{
    // console.log(num) refferance error 
    console.log(num1)
    // console.log(num2) refferance error
    let num = 10;
    var num1 =20;
    const num2 =30;
}


function     hello(){
    // console.log(num) refferance error 
    console.log(num1)
    // console.log(num2) refferance error

    let num = 10;
    var num1 =20;
    const num2 =30;
}
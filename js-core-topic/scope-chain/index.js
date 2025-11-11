// --> scope chain

//  Scope kya hota hai?
// Scope ka matlab hai ki variable kis area me accessible hai.
// Types:
// Global Scope
// Function Scope
// Block Scope (let/const)

// जब किसी function के अंदर कोई variable इस्तेमाल होता है, JavaScript यह देखती है कि वह variable कहाँ defined है। खोजने की यह direction अंदर से बाहर की तरफ होती है।

// 1 सबसे पहले current block/function में ढूंढती है.
// 2अगर नहीं मिलता तो उसके parent scope में जाती है.
// 3फिर उसके parent में.
// 4आखिरी में global scope तक पहुँचती है


let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a); // global se mila
    console.log(b); // outer se mila
    console.log(c); // inner me mila
  }

  inner();
}

outer();


// . Key Points
// JavaScript variable ko ** अंदर से बाहर ** dhoondti hai.
// Inner function outer variables ko access kar sakta hai.
// Outer function inner variables ko access ** nahi ** kar sakta.
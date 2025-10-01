// 1.Scope
    // ->Scope मतलब variable की visibility और lifetime
    // ->यानी ये बताता है कि variable कहाँ से access किया जा सकता है 

// ----------> scope type 

//   1.Global Scope 
//      -अगर variable function या block के बाहर declare किया गया है, तो वो सभी जगह से accessible होता है।
//      -var, let, const दोनों global scope में काम करते हैं, लेकिन let/const window object में attach नहीं होते।

var a = 10;
let b = 20;
const c = 30;

function test() {
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
test();
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// ------------> Function Scope
                // -अगर variable function के अंदर declare हुआ है, तो वो sirf उसी function में accessible होता है।
                // -var function scoped है, let और const भी function के अंदर block scoped behavior follow करते हैं।

function myFunc() {
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x, y, z); // 10 20 30
}

myFunc();
// console.log(x); // ❌ Error  ReferenceError: x is not defined
// console.log(y); // ❌ Error  ReferenceError: y is not defined
// console.log(z); // ❌ Error  ReferenceError: z is not defined

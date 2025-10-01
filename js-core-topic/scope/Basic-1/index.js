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

// SHADOWING

// Shadowing यानी जब किसी inner scope में एक variable का नाम उसी नाम से फिर से declare कर दिया जाता है जो पहले outer scope में declare था। Inner वाला variable outer वाले को छुपा देता है। इसलिए उसे variable shadowing कहते हैं।


let name = "Subhash";  // outer scope

function test() {
    let name = "Uma";  // inner scope (shadowing the outer name)
    console.log(name); // Output: "Uma"
}

test();
console.log(name); // Output: "Subhash"
// यहाँ function के अंदर वाला name बाहर वाले name को shadow कर रहा है।


// NOTE:Shadowing कब होता है?
//      एक ही नाम का variable अगर दो अलग scopes में हो।
//      Inner वाला same नाम का variable, outer वाले को overshadow करता है।


// Valid shadowing और Illegal shadowing

// Valid (allowed):
let a = 10;
{
  let a = 20;  // allowed
  console.log(a);
}

// Illegal (not allowed):
// अगर तुम var वाले variable को let/const से same scope में shadow करो, तो error आता है।
var x = 10;
// let x = 20; // ❌ illegal shadowing (same scope)





// Shadowing deep 
// Variable shadowing दो चीज़ों पर depend करता है:
// Scope (कौन सा variable कहाँ तक valid है)
// Same नाम का variable inner scope में declare किया गया है


// Visual समझ
// Global Scope
//    |
//    |--- Function Scope
//            |
//            |--- Block Scope


// अगर तुम्हारे पास name पहले Global में है, और फिर Function में फिर से name declare कर दिया, तो function वाला name global वाले को shadow कर देगा।





// Shadowing + TDZ (Temporal Dead Zone)
// अगर inner scope में let/const declare हुआ है, तब भी जब तक वो initialize नहीं होता, उसको access नहीं कर सकते।

let b = 10;

{
//   console.log(x); // ❌ TDZ error
  let b = 20;
}


// यहाँ technically shadowing है, लेकिन हम inner वाले b को declaration से पहले access कर रहे हैं, इसलिए TDZ error आता है।
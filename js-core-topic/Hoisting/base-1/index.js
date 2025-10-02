// ----------------
// what is hoisting
// ----------------
//     --> JavaScript में code चलने से पहले ही Memory Creation Phase होता है।
//         इसमें JS engine:
//        1. function declarations और
//        2. variables (var, let, const)
//   👉 इसी को कहते हैं Hoisting (उठाकर ऊपर रखना)।

// 🔹 var, let, const में फर्क (Hoisting में)

// 1. var Hoisting
//    var को memory में undefined value assign हो जाती है।
//    इसलिए declaration से पहले access करने पर undefined मिलता है, error नहीं।

  console.log(a); // undefined (क्योंकि hoist हुआ है और default undefined)
  var a = 10;
  console.log(a); // 10




// 2. let Hoisting
//    let भी hoist होता है, लेकिन उसे value assign नहीं होती।
//    इसलिए जब तक execution उस line पर नहीं पहुँचता, तब तक variable Temporal Dead Zone (TDZ) में रहता है।

    // console.log(b); // ❌ ReferenceError (TDZ)
    let b = 20;
    console.log(b); // 20


// 3. const Hoisting
//    const भी hoist होता है और TDZ में रहता है।
//    लेकिन फर्क ये है कि declare करते ही value देना compulsory है।


// console.log(c); // ❌ ReferenceError (TDZ)
const c = 30;
console.log(c); // 30




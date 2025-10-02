// -------> what is lexical scope ?
        // - कौन सा function किस variables को access कर सकता है, ये उसकी लिखी हुई जगह (location) से तय होता है।
        // - Function के अंदर से, वो अपने parent scope के variables को access कर सकता है।
        // - मतलब जिस जगह function लिखा गया है, वहीं से उसका "scope" fix हो जाता है।
        //     ये runtime पर नहीं बदलता, compile time पर ही तय हो जाता है।

    // Example: Lexical Scope

    function outer() {
    let a = 10;   // outer का variable

    function inner() {
        console.log(a);  // inner को outer के variable का access है
    }
    inner();
    }
   
    outer();

//    👉 यहाँ inner() function को a variable access करने का हक़ है क्योंकि outer() उसका parent scope है।
//        ये है Lexical Scope.

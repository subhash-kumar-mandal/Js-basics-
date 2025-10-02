// -------> what is lexical scope ?
        // - कौन सा function किस variables को access कर सकता है, ये उसकी लिखी हुई जगह (location) से तय होता है।
        // - Function के अंदर से, वो अपने parent scope के variables को access कर सकता है।
        // - मतलब जिस जगह function लिखा गया है, वहीं से उसका "scope" fix हो जाता है।
        //     ये runtime पर नहीं बदलता, compile time पर ही तय हो जाता है।

    // Example: Lexical Scope

    function oute() {
    let a = 10;   // outer का variable

    function inner() {
        console.log(a);  // inner को outer के variable का access है
    }
    inner();
    }
   
    oute();

//    👉 यहाँ inner() function को a variable access करने का हक़ है क्योंकि outer() उसका parent scope है।
//        ये है Lexical Scope.






// -------------> what is closure ?
        //   - जब कोई inner function, अपने parent function के variables को use करता है,और parent function 
        //     खत्म होने के बाद भी वो variables याद रखता है,तो उस situation को कहते हैं Closure।
        //   - और parent function execute होने के बाद भी वो variables याद रहते हैं


    // Example: Closure 
    function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner;
}

let fn = outer();  // outer call हुआ, fn = inner
fn();  // 1
fn();  // 2
fn();  // 3


        // 1. outer() call होने के बाद normally उसका variable counter खत्म हो जाना चाहिए।
        // 2. लेकिन क्योंकि inner() उस counter को use कर रहा है, JS उसे "remember" करके रखती है।
        // 3. इसी को कहते हैं Closure → function + उसके आसपास का environment (variables)।

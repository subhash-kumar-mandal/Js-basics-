// --------------------
// what is variables ?
// Variables एक container होते हैं, जिसमें हम data store कर सकते हैं।
// Data कुछ भी हो सकता है: number, string, boolean, array, object, function आदि।
// JavaScript में variables declare करने के लिए var, let, const use होते हैं।

// ----> var 
    // . पुराना तरीका (ES5 और उससे पहले)।
    // . Function scoped होता है।
    // . Re-declare और update दोनों allowed हैं।
    // . Hoisting होती है → declare से पहले भी access कर सकते हो (value undefined होती है)।

    var a = 10;
    var a = 20;      // re-declare allowed
        a = 30;     // update allowed
   console.log(a); // 30



// -----------> let 
//     . Modern way (ES6 से आया)।
//     . Block scoped → {} के बाहर access नहीं कर सकते।
//     . Re-declare ❌, Update ✅
//     . Hoisting होती है लेकिन temporal dead zone की वजह से declare करने से पहले use नहीं कर सकते।

          let x = 10;
       // let x = 20; ❌ error (re-declare)
              x = 30;  // update allowed
         console.log(x); // 30

      if(true){
         let y = 50;
       console.log(y); // 50
        }
    // console.log(y); // ❌ error (block के बाहर)

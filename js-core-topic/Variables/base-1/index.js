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

// IIFE  --> Immediately Invoked Function Expression.
// Simple भाषा में: फंक्शन को बनाते ही तुरंत चला देना।

// Normal function 
function greet() {
  console.log("Hello1");
}

greet(); // यहाँ हम बाद में कॉल कर रहे हैं


// Immediately Invoked Function Expression
(function () {
  console.log("Hello2");
})();

// IIFE में हम function को define करते ही execute कर देते हैं:

// ये काम कैसे करता है?
// Function को parentheses में लपेटते हैं
// उसके बाद आख़िर में () लगाते हैं, जो उसे तुरंत चला देता है


// क्यों उपयोग होता है?
// IIFE का main use है scope isolate करना.
// मतलब अंदर बनाया variable बाहर से access नहीं होगा.

// NOTE: IIFE private space की तरह काम करता है।

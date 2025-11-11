// 1) First-Class Functions (JavaScript में)

// इसका मतलब है, आप functions के साथ वही सब कर सकते हो जो एक value, variable या object के साथ कर सकते हो:
// Function को किसी variable में store कर सकते हैं
// Function को किसी दूसरे function के argument के रूप में pass कर सकते हैं
// किसी function से function को return कर सकते हैं
// Function को array या object के अंदर रख सकते हैं


const greet = function () {
  console.log("Hello Subhash");
};

greet();   // function को variable के through call किया
// यह possible है क्योंकि JavaScript function को एक value की तरह मानता है।




// 2) Higher-Order Functions (HOF)
// ✅ किसी दूसरे function को argument के रूप में लेता है
// ✅ किसी function को return करता है
// NOTE: बस इतना सा difference hai

// Example (function को argument में देना):
function welcome(name) {
  console.log("Welcome", name);
}

function callFunction(fn) {
  fn("Subhash");
}

callFunction(welcome);



// Example (function return करना):
function outer() {
  return function inner() {
    console.log("Returned function executed");
  };
}

const result = outer();
result();

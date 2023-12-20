// Create Hello World Function

/**
 * @return {Function}
 */

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";    
    }
};

const f = createHelloWorld();
 f(); // "Hello World"

// ------------------------------------------------------------------- 
// Counter Function

 /**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return () => n++;
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
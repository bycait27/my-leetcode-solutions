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

// ------------------------------------------------------------------- 
// To Be Or Not To Be Function

/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
    return {
        toBe: function(val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// ------------------------------------------------------------------- 
// Counter II Function

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
 
var createCounter = function(init) {
    const resetInit = init;
    return {
        increment: () => {
            return ++init;
        },

        decrement: () => {
            return --init;
        },

        reset: () => {
            init = resetInit;
            return init;
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// ------------------------------------------------------------------- 
// Apply Transform Over Each Element in Array Function

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    // empty array to store the transformed elements
    let returnedArray = [];

    // iterate through the input array
    for (let i = 0; i < arr.length; i++) {
        let transformedElement = fn(arr[i], i);

        // add the transformed element to the result array
        returnedArray.push(transformedElement);
    };

    // return the final result array
    return returnedArray;
};
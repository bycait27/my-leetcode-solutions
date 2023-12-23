// Sign of the Product of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function(nums) {
    // function to determine the sign of a number
    function signFunc(x) {
        if (x > 0) {
            return 1;
        } else if (x < 0) {
            return -1;
        } else {
            return 0;
        }
    };

    // calculate the product of all values in the array
    let product = 1;
    for (let num of nums) {
        product *= num;
    };

    // return the sign of the product
    return signFunc(product);

};

// ------------------------------------------------------------------- 
// Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // turn string into an array
    let arr = s.trim().split(" ");

    // get the last item in the array
    const lastItem = arr[arr.length - 1];

    // return length of last item
    return lastItem.length;
};

// ------------------------------------------------------------------- 
// To Lower Case
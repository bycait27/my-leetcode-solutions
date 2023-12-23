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
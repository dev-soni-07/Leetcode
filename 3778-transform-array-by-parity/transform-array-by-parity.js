/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let evens = 0, odds = 0;

    for (let n of nums) {
        if (n % 2 === 0) evens++;
        else odds++;
    }

    return Array(evens).fill(0).concat(Array(odds).fill(1));
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let diff = 0;
    for (let n of nums) diff ^= n;

    let bit = diff & -diff;

    let a = 0, b = 0;
    for (let n of nums) {
        if (n & bit) a ^= n;
        else b ^= n;
    }

    return [a, b];
};

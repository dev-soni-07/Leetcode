/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let res = [];
    let zeroCount = 0;
    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            res.push(num);
        }
    }
    while (zeroCount--) {
        res.push(0);
    }
    return res;
};
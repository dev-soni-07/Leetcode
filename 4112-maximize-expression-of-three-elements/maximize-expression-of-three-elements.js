/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    nums.sort((a, b) => a - b);
    let min1 = nums[0];
    let n = nums.length;
    let max1 = nums[n - 1];
    let max2 = nums[n - 2];
    return max1 + max2 - min1;
};
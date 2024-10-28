/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);

    let newMax = maxNum - k;
    let newMin = minNum + k;

    let difference = newMax - newMin;

    return Math.max(0, difference);
};
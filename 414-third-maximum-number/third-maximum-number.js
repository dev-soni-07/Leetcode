/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let thirdDistinctMax;

    let distinctNums = [...new Set(nums)];

    if (distinctNums.length < 3) {
        thirdDistinctMax = Math.max(...distinctNums);
    } else {
        thirdDistinctMax = distinctNums.sort((a, b) => b - a)[2];
    }

    return thirdDistinctMax;
};
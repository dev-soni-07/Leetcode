/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);

    let totalSum = nums.reduce((a, b) => a + b, 0);
    let subsequenceSum = 0;
    let subsequence = [];

    for (let num of nums) {
        subsequenceSum += num;
        subsequence.push(num);
        if (subsequenceSum > totalSum - subsequenceSum) {
            break;
        }
    }

    return subsequence;
};
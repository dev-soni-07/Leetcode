/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let total = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let start = Math.max(0, i - nums[i]);
        for (let j = start; j <= i; j++) {
            total += nums[j];
        }
    }

    return total;
};
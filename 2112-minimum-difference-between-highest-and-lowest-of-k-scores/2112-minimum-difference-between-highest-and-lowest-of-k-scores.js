/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) return 0;

    nums.sort((a, b) => a - b);

    let minDifference = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        const difference = nums[i + k - 1] - nums[i];
        minDifference = Math.min(minDifference, difference);
    }

    return minDifference;
};
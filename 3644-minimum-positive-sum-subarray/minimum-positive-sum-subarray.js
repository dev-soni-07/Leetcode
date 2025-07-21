/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let minSum = Infinity;
    const n = nums.length;

    for (let len = l; len <= r; len++) {
        let sum = 0;

        for (let i = 0; i < len; i++) {
            sum += nums[i];
        }
        if (sum > 0) minSum = Math.min(minSum, sum);

        for (let i = len; i < n; i++) {
            sum = sum - nums[i - len] + nums[i];
            if (sum > 0) minSum = Math.min(minSum, sum);
        }
    }

    return minSum === Infinity ? -1 : minSum;
};

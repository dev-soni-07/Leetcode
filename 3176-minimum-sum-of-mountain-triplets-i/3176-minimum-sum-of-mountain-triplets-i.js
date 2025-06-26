/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let minSum = Infinity;
    const n = nums.length;
    for (let j = 1; j < n - 1; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[k] < nums[j]) {
                        minSum = Math.min(minSum, nums[i] + nums[j] + nums[k]);
                    }
                }
            }
        }
    }
    return minSum === Infinity ? -1 : minSum;
};
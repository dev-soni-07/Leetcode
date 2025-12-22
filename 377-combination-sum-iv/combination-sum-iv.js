/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let t = 1; t <= target; t++) {
        for (let n of nums) {
            if (t - n >= 0) {
                dp[t] += dp[t - n];
            }
        }
    }

    return dp[target];
};

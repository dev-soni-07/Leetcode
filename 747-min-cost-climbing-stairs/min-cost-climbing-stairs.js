/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1] || 0, dp[i + 2] || 0);
    }

    return Math.min(dp[0], dp[1]);
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
    const n = nums.length;

    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const avg = (i, j) => {
        return (prefix[j + 1] - prefix[i]) / (j - i + 1);
    };

    const dp = Array.from({ length: n }, () =>
        new Array(k + 1).fill(0)
    );

    for (let i = 0; i < n; i++) {
        dp[i][1] = avg(i, n - 1);
    }

    for (let p = 2; p <= k; p++) {
        for (let i = 0; i < n; i++) {

            for (let j = i; j <= n - p; j++) {
                dp[i][p] = Math.max(
                    dp[i][p],
                    avg(i, j) + dp[j + 1][p - 1]
                );
            }
        }
    }

    return dp[0][k];
};
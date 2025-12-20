/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    let best = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[best]) best = i;
    }

    const res = [];
    while (best !== -1) {
        res.push(nums[best]);
        best = prev[best];
    }

    return res.reverse();
};
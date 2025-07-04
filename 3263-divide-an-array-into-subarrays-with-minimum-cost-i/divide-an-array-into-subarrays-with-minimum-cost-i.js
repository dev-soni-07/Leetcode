/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let n = nums.length;
    let minCost = Infinity;
    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            let cost = nums[0] + nums[i] + nums[j];
            minCost = Math.min(minCost, cost);
        }
    }
    return minCost;
};
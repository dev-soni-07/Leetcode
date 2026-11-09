
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const totalSum = stones.reduce((sum, stone) => sum + stone, 0);
    const target = Math.floor(totalSum / 2);

    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const stone of stones) {
        for (let j = target; j >= stone; j--) {
            dp[j] = dp[j] || dp[j - stone];
        }
    }

    for (let j = target; j >= 0; j--) {
        if (dp[j]) {
            return totalSum - 2 * j;
        }
    }

    return 0;
};

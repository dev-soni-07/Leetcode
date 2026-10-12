
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    const n = values.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;

            for (let k = i + 1; k < j; k++) {
                const score =
                    dp[i][k] +
                    dp[k][j] +
                    values[i] * values[k] * values[j];

                dp[i][j] = Math.min(dp[i][j], score);
            }
        }
    }

    return dp[0][n - 1];
};

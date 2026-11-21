
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    const suffixSum = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    const dp = Array.from({ length: n }, () => 
        new Array(n + 1).fill(-1)
    );

    function solve(i, M) {
        if (i + 2 * M >= n) {
            return suffixSum[i];
        }

        if (dp[i][M] !== -1) {
            return dp[i][M];
        }

        let maxStones = 0;

        for (let X = 1; X <= 2 * M; X++) {
            const opponentStones = solve(i + X, Math.max(M, X));

            const currentStones = suffixSum[i] - opponentStones;

            maxStones = Math.max(maxStones, currentStones);
        }

        return dp[i][M] = maxStones;
    }

    return solve(0, 1);
};

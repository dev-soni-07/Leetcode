/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    let dp = Array.from({ length: n }, () => Array(n).fill(n));
    
    for (let [r, c] of mines) {
        dp[r][c] = 0;
    }
    
    for (let r = 0; r < n; r++) {
        let count = 0;
        for (let c = 0; c < n; c++) {
            count = (dp[r][c] === 0) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
        
        count = 0;
        for (let c = n - 1; c >= 0; c--) {
            count = (dp[r][c] === 0) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
    }
    
    let result = 0;
    
    for (let c = 0; c < n; c++) {
        let count = 0;
        for (let r = 0; r < n; r++) {
            count = (dp[r][c] === 0) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
        
        count = 0;
        for (let r = n - 1; r >= 0; r--) {
            count = (dp[r][c] === 0) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
            result = Math.max(result, dp[r][c]);
        }
    }
    
    return result;
};
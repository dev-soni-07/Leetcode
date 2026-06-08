/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;

    const indexMap = new Map();

    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }

    const dp = Array.from({ length: n }, () => Array(n).fill(2));

    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {

            const prev = arr[i] - arr[j];

            if (prev < arr[j] && indexMap.has(prev)) {

                const k = indexMap.get(prev);

                dp[j][i] = dp[k][j] + 1;

                maxLen = Math.max(maxLen, dp[j][i]);
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
};
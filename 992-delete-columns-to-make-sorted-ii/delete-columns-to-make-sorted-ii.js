/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;

    const sorted = new Array(n - 1).fill(false);

    let ans = 0;

    for (let col = 0; col < m; col++) {
        let bad = false;

        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] > strs[i + 1][col]) {
                bad = true;
                break;
            }
        }

        if (bad) {
            ans++;
            continue;
        }

        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] < strs[i + 1][col]) {
                sorted[i] = true;
            }
        }
    }

    return ans;
};
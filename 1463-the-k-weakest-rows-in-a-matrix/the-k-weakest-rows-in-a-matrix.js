/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let soldiersCount = mat.map((row, index) => {
        let count = row.reduce((a, b) => a + b, 0);
        return [count, index];
    });

    soldiersCount.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let result = soldiersCount.slice(0, k).map(item => item[1]);

    return result;
};
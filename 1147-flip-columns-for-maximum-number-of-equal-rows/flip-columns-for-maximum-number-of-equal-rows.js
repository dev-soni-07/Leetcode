
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const map = new Map();

    for (const row of matrix) {
        const normalized = row.map(num => num ^ row[0]).join('');

        map.set(normalized, (map.get(normalized) || 0) + 1);
    }

    let maxCount = 0;

    for (const count of map.values()) {
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) {
        return m * n;
    }

    let minA = m;
    let minB = n;

    for (let i = 0; i < ops.length; i++) {
        minA = Math.min(minA, ops[i][0]);
        minB = Math.min(minB, ops[i][1]);
    }

    return minA * minB;
};
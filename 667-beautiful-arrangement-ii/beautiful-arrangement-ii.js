/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    const res = [];

    let left = 1, right = k + 1;

    while (left <= right) {
        if (left === right) {
            res.push(left);
        } else {
            res.push(left);
            res.push(right);
        }
        left++;
        right--;
    }

    for (let i = k + 2; i <= n; i++) {
        res.push(i);
    }

    return res;
};
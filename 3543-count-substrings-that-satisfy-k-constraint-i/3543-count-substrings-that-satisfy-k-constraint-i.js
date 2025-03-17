/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let zeros = 0;
        let ones = 0;
        for (let j = i; j < n; j++) {
            if (s[j] === '0') {
                zeros++;
            } else {
                ones++;
            }
            if (zeros <= k || ones <= k) {
                count++;
            } else {
                break;
            }
        }
    }

    return count;
};
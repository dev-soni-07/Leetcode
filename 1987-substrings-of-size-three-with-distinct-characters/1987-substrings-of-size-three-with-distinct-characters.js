/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let substring = s.substring(i, i + 3);
        if (new Set(substring).size === 3) {
            count++;
        }
    }
    return count;
};
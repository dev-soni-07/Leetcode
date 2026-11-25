/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const required = 1 << k;

    if (s.length < required + k - 1) {
        return false;
    }

    const seen = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        const substring = s.substring(i, i + k);
        seen.add(substring);

        if (seen.size === required) {
            return true;
        }
    }

    return false;
};
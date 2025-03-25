/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    for (let i = 0; i <= s.length - k; i++) {
        const substring = s.slice(i, i + k);
        const allSame = substring.split('').every(char => char === substring[0]);

        if (allSame) {
            const before = i > 0 ? s[i - 1] : null;
            const after = i + k < s.length ? s[i + k] : null;

            if ((before === null || before !== substring[0]) &&
                (after === null || after !== substring[0])) {
                return true;
            }
        }
    }
    return false;
};
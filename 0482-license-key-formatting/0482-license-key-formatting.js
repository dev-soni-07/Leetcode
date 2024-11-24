/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replace(/-/g, '').toUpperCase();

    let result = [];
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
        count++;
        if (count === k && i !== 0) {
            result.push('-');
            count = 0;
        }
    }

    return result.reverse().join('');
};
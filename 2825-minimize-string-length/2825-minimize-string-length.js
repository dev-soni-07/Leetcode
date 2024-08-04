/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (!result.includes(s[i])) {
            result.push(s[i]);
        }
    }

    return result.join('').length;
};
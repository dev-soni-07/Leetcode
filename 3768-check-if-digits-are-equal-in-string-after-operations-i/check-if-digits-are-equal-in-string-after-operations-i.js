/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length > 2) {
        let newString = '';
        for (let i = 0; i < s.length - 1; i++) {
            const sum = (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
            newString += sum.toString();
        }
        s = newString;
    }
    return s[0] === s[1];
};
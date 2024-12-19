/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let numStr = '';
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1).toString();
    }

    let sumDigits = (num) => {
        return num.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    let result = numStr;
    for (let i = 0; i < k; i++) {
        result = sumDigits(result).toString();
    }

    return parseInt(result);
};
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let lastNonZeroDigit = num.length;

    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] !== "0") {
            lastNonZeroDigit = i + 1;
            break;
        }
    }

    return num.slice(0, lastNonZeroDigit);
};
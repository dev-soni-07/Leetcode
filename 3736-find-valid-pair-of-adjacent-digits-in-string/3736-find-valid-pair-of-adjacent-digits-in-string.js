/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    const frequencyMap = {};
    for (const char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    for (let i = 0; i < s.length - 1; i++) {
        const firstDigit = s[i];
        const secondDigit = s[i + 1];

        if (
            firstDigit !== secondDigit &&
            frequencyMap[firstDigit] === parseInt(firstDigit) &&
            frequencyMap[secondDigit] === parseInt(secondDigit)
        ) {
            return firstDigit + secondDigit;
        }
    }

    return "";
};
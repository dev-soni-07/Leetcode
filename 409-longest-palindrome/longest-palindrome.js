/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOddCount = false;

    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOddCount = true;
        }
    }

    if (hasOddCount) {
        length += 1;
    }

    return length;
};
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let charCount = {};
        let currentLength = 0;

        for (let j = i; j < s.length; j++) {
            charCount[s[j]] = (charCount[s[j]] || 0) + 1;

            if (charCount[s[j]] > 2) {
                break;
            }

            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
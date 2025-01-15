/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charCount = {};
    const n = words.length;

    for (const word of words) {
        for (const char of word) {
            if (!charCount[char]) {
                charCount[char] = 0;
            }
            charCount[char]++;
        }
    }

    for (const count of Object.values(charCount)) {
        if (count % n !== 0) {
            return false;
        }
    }

    return true;
};
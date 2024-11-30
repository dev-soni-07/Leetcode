/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let totalLength = 0;

    let charCount = {};
    for (let char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let word of words) {
        let wordCount = {};
        for (let char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1;
        }

        let good = true;
        for (let char in wordCount) {
            if (wordCount[char] > (charCount[char] || 0)) {
                good = false;
                break;
            }
        }

        if (good) {
            totalLength += word.length;
        }
    }

    return totalLength;
};
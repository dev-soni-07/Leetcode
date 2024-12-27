/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let modifiedWord = word.replace(/\D/g, ' ');

    let substrings = modifiedWord.split(' ');

    let uniqueIntegers = new Set();

    for (let substring of substrings) {
        if (substring.length > 0) {
            uniqueIntegers.add(substring.replace(/^0+/, ''));
        }
    }

    return uniqueIntegers.size;
};
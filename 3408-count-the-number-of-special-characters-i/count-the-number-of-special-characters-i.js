/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let specialCount = 0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let char of alphabet) {
        if (word.includes(char) && word.includes(char.toUpperCase())) {
            specialCount++;
        }
    }

    return specialCount;
};
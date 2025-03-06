/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let sortedWord = word.split('').sort();
    let totalPushes = 0;
    let keyIndex = 0;

    for (let i = 0; i < sortedWord.length; i++) {
        totalPushes += Math.floor(i / 8) + 1;
    }

    return totalPushes;
};
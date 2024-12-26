/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    const compareWords = (word1, word2) => {
        const len = Math.min(word1.length, word2.length);
        for (let i = 0; i < len; i++) {
            if (word1[i] !== word2[i]) {
                return orderMap[word1[i]] - orderMap[word2[i]];
            }
        }
        return word1.length - word2.length;
    };

    for (let i = 0; i < words.length - 1; i++) {
        if (compareWords(words[i], words[i + 1]) > 0) {
            return false;
        }
    }

    return true;
};
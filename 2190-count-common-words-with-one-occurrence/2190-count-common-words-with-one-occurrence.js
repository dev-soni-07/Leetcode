/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const count1 = {};
    const count2 = {};

    for (const word of words1) {
        count1[word] = (count1[word] || 0) + 1;
    }

    for (const word of words2) {
        count2[word] = (count2[word] || 0) + 1;
    }

    let result = 0;

    for (const word in count1) {
        if (count1[word] === 1 && count2[word] === 1) {
            result += 1;
        }
    }

    return result;
};
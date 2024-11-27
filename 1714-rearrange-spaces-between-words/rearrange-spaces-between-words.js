/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let totalSpaces = 0, words = [];
    let word = '';

    for (let char of text) {
        if (char === ' ') {
            totalSpaces++;
            if (word) {
                words.push(word);
                word = '';
            }
        } else {
            word += char;
        }
    }
    if (word) words.push(word);

    let totalWords = words.length;
    let spacesBetweenWords = totalWords > 1 ? Math.floor(totalSpaces / (totalWords - 1)) : 0;
    let extraSpaces = totalWords > 1 ? totalSpaces % (totalWords - 1) : totalSpaces;

    let result = words.join(' '.repeat(spacesBetweenWords));
    result += ' '.repeat(extraSpaces);

    return result;
};
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let splittedString = [];

    for (let word of words) {
        splittedString.push(...word.split(separator));
    }

    return splittedString.filter(filteredString => filteredString !== "");
};
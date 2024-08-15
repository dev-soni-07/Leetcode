/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let splittedString = [];

    for (let word of words) {
        if (word.includes(separator)) {
            const filteredArray = word.split(separator);
            for (let filteredString of filteredArray) {
                if (filteredString !== "") {
                    splittedString.push(filteredString);
                }
            }
        } else {
            splittedString.push(word);
        }
    }

    return splittedString;
};
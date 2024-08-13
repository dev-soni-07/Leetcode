/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let frequencyObj = {};

    for (let char of words[0]) {
        frequencyObj[char] = (frequencyObj[char] || 0) + 1;
    }

    for (let i = 1; i < words.length; i++) {
        let currentObj = {};
        for (let char of words[i]) {
            currentObj[char] = (currentObj[char] || 0) + 1;
        }
        for (let char in frequencyObj) {
            if (currentObj[char]) {
                frequencyObj[char] = Math.min(frequencyObj[char], currentObj[char]);
            } else {
                delete frequencyObj[char];
            }
        }
    }

    for (let char in frequencyObj) {
        for (let i = 0; i < frequencyObj[char]; i++) {
            result.push(char);
        }
    }

    return result;
};
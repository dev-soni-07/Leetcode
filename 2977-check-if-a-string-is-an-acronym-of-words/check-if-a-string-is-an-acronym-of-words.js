/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let result = "";

    for (let i=0; i<words.length; i++){
        result += words[i][0];
    }

    return result === s;
};
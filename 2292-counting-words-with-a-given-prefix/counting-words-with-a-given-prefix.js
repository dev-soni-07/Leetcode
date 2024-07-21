/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let result = 0, temp = "";

    for (let word of words) {
        for (let i = 0; i < pref.length; i++) {
            temp += word[i];
        }
        if (temp === pref) result++;
        temp = "";
        }

    return result;
};
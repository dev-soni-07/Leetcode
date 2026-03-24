/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            sum += weights[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        let val = sum % 26;

        let mappedChar = String.fromCharCode('z'.charCodeAt(0) - val);

        result += mappedChar;
    }

    return result;
};
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let res = "";
    let index = word.indexOf(ch);
    if (index !== -1) {
        for (let j = index; j >= 0; j--) {
            res += word[j];
        }
        res += word.slice(index + 1);
    } else {
        res = word;
    }
    return res;
};
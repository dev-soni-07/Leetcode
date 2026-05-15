/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let set = new Set(words);

    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.substring(i));
        }
    }

    let ans = 0;

    for (let word of set) {
        ans += word.length + 1;
    }

    return ans;
};
/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1;
    let i = 0;

    while (i < word.length) {
        let j = i;

        while (j < word.length && word[j] === word[i]) {
            j++;
        }

        count += (j - i - 1);

        i = j;
    }

    return count;
};
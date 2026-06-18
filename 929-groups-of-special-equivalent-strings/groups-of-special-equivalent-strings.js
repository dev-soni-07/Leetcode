/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    const groups = new Set();

    for (const word of words) {
        let even = [];
        let odd = [];

        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                even.push(word[i]);
            } else {
                odd.push(word[i]);
            }
        }

        even.sort();
        odd.sort();

        groups.add(even.join('') + '|' + odd.join(''));
    }

    return groups.size;
};
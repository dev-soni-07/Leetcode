/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let freq = new Array(26).fill(0);

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of t) {
        freq[ch.charCodeAt(0) - 97]--;
    }

    let steps = 0;

    for (let count of freq) {
        if (count > 0) {
            steps += count;
        }
    }

    return steps;
};
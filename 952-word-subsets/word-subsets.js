/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const required = new Array(26).fill(0);

    for (const word of words2) {
        const freq = new Array(26).fill(0);

        for (const ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            required[i] = Math.max(required[i], freq[i]);
        }
    }

    const result = [];

    for (const word of words1) {
        const freq = new Array(26).fill(0);

        for (const ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        let valid = true;

        for (let i = 0; i < 26; i++) {
            if (freq[i] < required[i]) {
                valid = false;
                break;
            }
        }

        if (valid) result.push(word);
    }

    return result;
};
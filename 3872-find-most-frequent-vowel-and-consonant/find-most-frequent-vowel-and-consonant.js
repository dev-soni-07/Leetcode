/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = new Map();

    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    let maxVowel = 0, maxConsonant = 0;

    for (let [char, count] of freq.entries()) {
        if (vowels.has(char)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
};
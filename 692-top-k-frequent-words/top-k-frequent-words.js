/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = new Map();

    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    const sorted = Array.from(freq.keys()).sort((a, b) => {
        if (freq.get(b) === freq.get(a)) {
            return a.localeCompare(b);
        }
        return freq.get(b) - freq.get(a);
    });

    return sorted.slice(0, k);
};
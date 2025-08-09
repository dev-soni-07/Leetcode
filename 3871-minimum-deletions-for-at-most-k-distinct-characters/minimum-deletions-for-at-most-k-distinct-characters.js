/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    let freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let counts = Object.values(freq).sort((a, b) => a - b);
    let distinct = counts.length;

    if (distinct <= k) return 0;

    let removeCount = distinct - k;
    let deletions = 0;
    for (let i = 0; i < removeCount; i++) {
        deletions += counts[i];
    }

    return deletions;
};

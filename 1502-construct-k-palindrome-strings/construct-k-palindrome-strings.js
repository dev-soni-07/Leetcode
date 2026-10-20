
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false;

    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let oddCount = 0;

    for (const count of freq) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= k;
};

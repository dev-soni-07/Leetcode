/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);

    let result = "";
    for (const [ch, count] of sorted) {
        result += ch.repeat(count);
    }

    return result;
};
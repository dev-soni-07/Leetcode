/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const freqMap = {};
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let maxOdd = -Infinity;
    let minEven = Infinity;

    for (const freq of Object.values(freqMap)) {
        if (freq % 2 === 0) {
            minEven = Math.min(minEven, freq);
        } else {
            maxOdd = Math.max(maxOdd, freq);
        }
    }

    return maxOdd - minEven;
};
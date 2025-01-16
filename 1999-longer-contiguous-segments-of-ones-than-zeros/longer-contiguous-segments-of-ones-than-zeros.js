/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let maxOnes = 0, maxZeros = 0;
    let currentOnes = 0, currentZeros = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            currentOnes++;
            currentZeros = 0;
        } else {
            currentZeros++;
            currentOnes = 0;
        }
        maxOnes = Math.max(maxOnes, currentOnes);
        maxZeros = Math.max(maxZeros, currentZeros);
    }

    return maxOnes > maxZeros;
};
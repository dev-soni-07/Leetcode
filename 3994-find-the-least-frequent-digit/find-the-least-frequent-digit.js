/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    const str = n.toString();
    
    const freq = new Array(10).fill(0);
    for (let ch of str) {
        freq[parseInt(ch)]++;
    }
    
    let minFreq = Infinity;
    for (let f of freq) {
        if (f > 0 && f < minFreq) {
            minFreq = f;
        }
    }
    
    for (let i = 0; i < 10; i++) {
        if (freq[i] === minFreq) return i;
    }
};

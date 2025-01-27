/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const freq = new Map();

    for (const char of word) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const freqValues = Array.from(freq.values());

    for (let i = 0; i < freqValues.length; i++) {
        const temp = [...freqValues];
        temp[i]--;

        const filtered = temp.filter(f => f > 0);

        if (new Set(filtered).size === 1) {
            return true;
        }
    }

    return false;
};
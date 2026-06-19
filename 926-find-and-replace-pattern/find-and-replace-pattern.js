/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const res = [];

    for (const word of words) {
        const pToW = new Map();
        const wToP = new Map();
        let valid = true;

        for (let i = 0; i < pattern.length; i++) {
            const p = pattern[i];
            const w = word[i];

            if (pToW.has(p) && pToW.get(p) !== w) {
                valid = false;
                break;
            }

            if (wToP.has(w) && wToP.get(w) !== p) {
                valid = false;
                break;
            }

            pToW.set(p, w);
            wToP.set(w, p);
        }

        if (valid) res.push(word);
    }

    return res;
};
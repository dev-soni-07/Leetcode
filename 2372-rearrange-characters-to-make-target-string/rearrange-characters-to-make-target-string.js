/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const sCount = {};
    for (const char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }

    const targetCount = {};
    for (const char of target) {
        targetCount[char] = (targetCount[char] || 0) + 1;
    }

    let maxCopies = Infinity;
    for (const char of target) {
        if (sCount[char]) {
            maxCopies = Math.min(maxCopies, Math.floor(sCount[char] / targetCount[char]));
        } else {
            return 0;
        }
    }

    return maxCopies;
};
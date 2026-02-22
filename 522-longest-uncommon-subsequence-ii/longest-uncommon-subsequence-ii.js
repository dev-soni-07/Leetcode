/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    strs.sort((a, b) => b.length - a.length);

    function isSubsequence(s, t) {
        let i = 0;
        for (let c of t) {
            if (c === s[i]) i++;
            if (i === s.length) return true;
        }
        return false;
    }

    for (let i = 0; i < strs.length; i++) {
        let uncommon = true;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            if (isSubsequence(strs[i], strs[j])) {
                uncommon = false;
                break;
            }
        }
        if (uncommon) return strs[i].length;
    }

    return -1;
};
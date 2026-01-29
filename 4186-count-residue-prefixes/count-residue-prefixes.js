/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    let seen = new Set();
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        seen.add(s[i]);

        let distinct = seen.size;
        let mod = (i + 1) % 3;

        if (distinct === mod) {
            count++;
        }
    }

    return count;
};
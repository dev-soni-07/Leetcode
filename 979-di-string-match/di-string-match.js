/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const n = s.length;
    let low = 0, high = n;
    let perm = new Array(n + 1);

    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            perm[i] = low++;
        } else {
            perm[i] = high--;
        }
    }

    perm[n] = low;

    return perm;
};
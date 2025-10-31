/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    const score = c => c.charCodeAt(0) - 96;

    const n = s.length;
    const prefix = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + score(s[i]);
    }

    for (let i = 0; i < n - 1; i++) {
        const left = prefix[i + 1];
        const right = prefix[n] - prefix[i + 1];
        if (left === right) return true;
    }

    return false;
};

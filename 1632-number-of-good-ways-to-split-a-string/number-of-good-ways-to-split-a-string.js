
/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const n = s.length;
    const prefix = new Array(n);
    const suffix = new Array(n);

    let set = new Set();

    for (let i = 0; i < n; i++) {
        set.add(s[i]);
        prefix[i] = set.size;
    }

    set.clear();

    for (let i = n - 1; i >= 0; i--) {
        set.add(s[i]);
        suffix[i] = set.size;
    }

    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
        if (prefix[i] === suffix[i + 1]) {
            ans++;
        }
    }

    return ans;
};

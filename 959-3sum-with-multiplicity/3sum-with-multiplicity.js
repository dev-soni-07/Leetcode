/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    const MOD = 1000000007;
    const count = new Array(101).fill(0);

    for (const x of arr) {
        count[x]++;
    }

    let ans = 0;

    for (let a = 0; a <= 100; a++) {
        for (let b = a; b <= 100; b++) {
            const c = target - a - b;

            if (c < b || c > 100) continue;

            const ca = count[a];
            const cb = count[b];
            const cc = count[c];

            if (ca === 0 || cb === 0 || cc === 0) continue;

            if (a === b && b === c) {
                // Choose 3 occurrences from ca
                ans += ca * (ca - 1) * (ca - 2) / 6;
            } else if (a === b) {
                // Choose 2 a's and 1 c
                ans += ca * (ca - 1) / 2 * cc;
            } else if (b === c) {
                // Choose 1 a and 2 b's
                ans += ca * cb * (cb - 1) / 2;
            } else {
                // All three values are different
                ans += ca * cb * cc;
            }

            ans %= MOD;
        }
    }

    return ans;
};
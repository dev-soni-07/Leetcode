/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    let count = new Array(121).fill(0);

    for (let age of ages) {
        count[age]++;
    }

    let ans = 0;

    for (let a = 1; a <= 120; a++) {
        for (let b = 1; b <= 120; b++) {

            if (b <= 0.5 * a + 7) continue;
            if (b > a) continue;

            ans += count[a] * count[b];

            if (a === b) {
                ans -= count[a];
            }
        }
    }

    return ans;
};
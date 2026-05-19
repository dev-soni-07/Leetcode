/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    let banned = new Set();

    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] === backs[i]) {
            banned.add(fronts[i]);
        }
    }

    let ans = Infinity;

    for (let num of fronts) {
        if (!banned.has(num)) {
            ans = Math.min(ans, num);
        }
    }

    for (let num of backs) {
        if (!banned.has(num)) {
            ans = Math.min(ans, num);
        }
    }

    return ans === Infinity ? 0 : ans;
};
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const count = {};
    for (const card of deck) {
        count[card] = (count[card] || 0) + 1;
    }

    const counts = Object.values(count);

    let groupGCD = counts[0];
    for (let i = 1; i < counts.length; i++) {
        groupGCD = gcd(groupGCD, counts[i]);
        if (groupGCD === 1) return false;
    }

    return groupGCD > 1;
};
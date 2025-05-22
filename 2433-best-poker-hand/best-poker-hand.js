/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if (new Set(suits).size === 1) {
        return "Flush";
    }

    const rankCount = {};
    for (let rank of ranks) {
        rankCount[rank] = (rankCount[rank] || 0) + 1;
    }

    let maxCount = 0;
    for (let count of Object.values(rankCount)) {
        if (count > maxCount) maxCount = count;
    }

    if (maxCount >= 3) return "Three of a Kind";
    if (maxCount === 2) return "Pair";
    return "High Card";
};
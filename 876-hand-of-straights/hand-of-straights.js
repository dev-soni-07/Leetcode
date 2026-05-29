/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    const count = new Map();

    for (let card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    hand.sort((a, b) => a - b);

    for (let card of hand) {

        if (count.get(card) === 0) continue;

        for (let i = 0; i < groupSize; i++) {
            const current = card + i;

            if (!count.get(current)) {
                return false;
            }

            count.set(current, count.get(current) - 1);
        }
    }

    return true;
};
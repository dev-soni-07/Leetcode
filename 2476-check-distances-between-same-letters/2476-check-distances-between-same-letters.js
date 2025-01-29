/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const firstOccurrence = new Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const charIndex = s.charCodeAt(i) - 97;

        if (firstOccurrence[charIndex] === -1) {
            firstOccurrence[charIndex] = i;
        } else {
            const expectedDistance = distance[charIndex];
            const actualDistance = i - firstOccurrence[charIndex] - 1;

            if (actualDistance !== expectedDistance) {
                return false;
            }
        }
    }

    return true;
};
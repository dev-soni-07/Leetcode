/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const frequency = new Map();

    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    for (const count of frequency.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }

    return true;
};
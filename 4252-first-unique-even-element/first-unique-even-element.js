/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    const freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of nums) {
        if (num % 2 === 0 && freq[num] === 1) {
            return num;
        }
    }

    return -1;
};
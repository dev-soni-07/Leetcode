/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const freq = new Map();

    freq.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;

        if (freq.has(sum - goal)) {
            count += freq.get(sum - goal);
        }

        freq.set(sum, (freq.get(sum) || 0) + 1);
    }

    return count;
};
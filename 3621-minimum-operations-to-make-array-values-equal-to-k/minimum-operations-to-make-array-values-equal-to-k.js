/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    for (let num of nums) {
        if (num < k) return -1;
    }

    let unique = new Set();
    for (let num of nums) {
        if (num > k) unique.add(num);
    }

    return unique.size;
};

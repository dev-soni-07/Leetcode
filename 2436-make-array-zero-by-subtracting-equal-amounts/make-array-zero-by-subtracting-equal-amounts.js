/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const unique = new Set();
    for (const num of nums) {
        if (num !== 0) unique.add(num);
    }
    return unique.size;
};
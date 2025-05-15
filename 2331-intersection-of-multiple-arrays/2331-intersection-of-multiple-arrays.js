/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const count = {};
    const n = nums.length;
    for (const arr of nums) {
        for (const num of arr) {
            count[num] = (count[num] || 0) + 1;
        }
    }
    return Object.keys(count)
        .filter(key => count[key] === n)
        .map(Number)
        .sort((a, b) => a - b);
};
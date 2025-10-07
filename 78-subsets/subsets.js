/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];

    for (let num of nums) {
        const newSubsets = result.map(subset => [...subset, num]);
        result.push(...newSubsets);
    }

    return result;
};

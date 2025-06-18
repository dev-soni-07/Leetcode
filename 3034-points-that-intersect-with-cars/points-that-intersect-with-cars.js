/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    nums.sort((a, b) => a[0] - b[0]);
    let merged = [];
    for (let [start, end] of nums) {
        if (merged.length === 0 || merged[merged.length - 1][1] < start - 1) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }
    let count = 0;
    for (let [start, end] of merged) {
        count += end - start + 1;
    }
    return count;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] <= 0) left = mid + 1;
        else right = mid;
    }
    const posCount = nums.length - left;

    left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) left = mid + 1;
        else right = mid;
    }
    const negCount = left;

    return Math.max(posCount, negCount);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let n = nums.length;
    let left = -1, right = -1;

    let maxSeen = -Infinity;
    for (let i = 0; i < n; i++) {
        if (nums[i] < maxSeen) {
            right = i;
        } else {
            maxSeen = nums[i];
        }
    }

    let minSeen = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > minSeen) {
            left = i;
        } else {
            minSeen = nums[i];
        }
    }

    if (right === -1) return 0;
    return right - left + 1;
};
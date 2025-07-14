/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    let n = nums.length;
    let minLen = Infinity;

    for (let i = 0; i < n; i++) {
        let or = 0;
        for (let j = i; j < n; j++) {
            or |= nums[j];
            if (or >= k) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    return minLen === Infinity ? -1 : minLen;
};

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let maxLength = 0;
    let currentLength = 0;
    let start = 0;

    while (start < nums.length) {
        if (nums[start] % 2 === 0 && nums[start] <= threshold) {
            currentLength = 1;
            for (let end = start + 1; end < nums.length; end++) {
                if (nums[end] > threshold || nums[end] % 2 === nums[end - 1] % 2) {
                    break;
                }
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
        start++;
    }

    return maxLength;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let maxLength = -1;
    let currentLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - nums[i - 1] === 1 && currentLength % 2 === 1) ||
            (nums[i - 1] - nums[i] === 1 && currentLength % 2 === 0)) {
            currentLength++;
        } else {
            currentLength = (nums[i] - nums[i - 1] === 1) ? 2 : 1;
        }
        if (currentLength > 1) {
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
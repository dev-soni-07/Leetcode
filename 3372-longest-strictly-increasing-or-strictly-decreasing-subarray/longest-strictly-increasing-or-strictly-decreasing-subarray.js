/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc = 1, dec = 1, maxLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc += 1;
            dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            dec += 1;
            inc = 1;
        } else {
            inc = dec = 1;
        }
        maxLen = Math.max(maxLen, inc, dec);
    }

    return maxLen;
};

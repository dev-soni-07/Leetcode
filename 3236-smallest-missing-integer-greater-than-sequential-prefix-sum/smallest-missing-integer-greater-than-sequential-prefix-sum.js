/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];
    let longestPrefixLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
            longestPrefixLength++;
        } else {
            break;
        }
    }

    let x = sum;
    while (nums.includes(x)) {
        x++;
    }

    return x;
};
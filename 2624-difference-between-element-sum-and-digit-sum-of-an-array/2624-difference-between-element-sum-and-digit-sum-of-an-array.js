/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element_sum = 0; digit_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        element_sum += nums[i];
        for (let digit of String(nums[i])) {
            digit_sum += Number(digit);
        }
    }

    return Math.abs(element_sum - digit_sum);
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleDigitSum = 0, doubleDigitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (String(nums[i]).length === 1) {
            singleDigitSum += nums[i];
        } else {
            doubleDigitSum += nums[i];
        }
    }

    return doubleDigitSum !== singleDigitSum;
};
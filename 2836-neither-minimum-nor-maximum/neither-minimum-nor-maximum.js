/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let result = -1;
    nums.sort((a, b) => a - b);
    let smallestNum = nums[0], largetNum = nums[nums.length - 1];

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > smallestNum && nums[i] < largetNum) {
            result = nums[i];
            break;
        }
    }

    return result;
};
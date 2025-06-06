/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let result = 0;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (left === right) {
            result += nums[left];
        } else {
            result += Number(String(nums[left]) + String(nums[right]));
        }
        left++;
        right--;
    }
    return result;
};
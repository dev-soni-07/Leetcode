/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let left = i - k >= 0 ? nums[i - k] : -Infinity;
        let right = i + k < nums.length ? nums[i + k] : -Infinity;
        
        if (nums[i] > left && nums[i] > right) {
            sum += nums[i];
        }
    }
    
    return sum;
};

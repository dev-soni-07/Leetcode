/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxValue = 0;
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const value = (nums[i] - nums[j]) * nums[k];
                if (value > maxValue) {
                    maxValue = value;
                }
            }
        }
    }
    return maxValue;
}
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let arithmeticTriplets = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < j; k++) {
                if ((Math.abs(nums[j] - nums[i])) === diff && (Math.abs(nums[k] - nums[j])) === diff) {
                    arithmeticTriplets += 1;
                }
            }
        }
    }

    return arithmeticTriplets;
};
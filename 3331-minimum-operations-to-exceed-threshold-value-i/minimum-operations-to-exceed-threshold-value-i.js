/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let result = nums.filter((element, index) => {
        return element < k;
    })

    return result.length;
};
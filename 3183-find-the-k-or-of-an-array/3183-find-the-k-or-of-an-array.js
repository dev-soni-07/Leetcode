/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let result = 0;
    for (let bit = 0; bit < 32; bit++) {
        let count = 0;
        for (let num of nums) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }
        if (count >= k) {
            result |= (1 << bit);
        }
    }
    return result;
};
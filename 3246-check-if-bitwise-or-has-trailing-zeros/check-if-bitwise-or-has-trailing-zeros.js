/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    let evenCount = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            evenCount++;
            if (evenCount >= 2) return true;
        }
    }
    return false;
};
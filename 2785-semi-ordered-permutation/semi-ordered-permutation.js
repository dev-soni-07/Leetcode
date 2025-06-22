/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    const n = nums.length;
    const pos1 = nums.indexOf(1);
    const posn = nums.indexOf(n);
    if (pos1 < posn) {
        return pos1 + (n - 1 - posn);
    } else {
        return pos1 + (n - 1 - posn) - 1;
    }
};
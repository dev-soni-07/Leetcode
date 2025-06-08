/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    for (let d = 1; d <= 9; d++) {
        if (nums1.includes(d) && nums2.includes(d)) {
            return d;
        }
    }
    let min1 = Math.min(...nums1);
    let min2 = Math.min(...nums2);
    return Math.min(min1 * 10 + min2, min2 * 10 + min1);
};
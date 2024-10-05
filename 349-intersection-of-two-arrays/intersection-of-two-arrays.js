/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let output = [], maxLength = nums1.length > nums2.length ? nums1.length : nums2.length;

    for (let i = 0; i < maxLength; i++) {
        if (nums2.includes(nums1[i])) {
            if (!output.includes(nums1[i])) {
                output.push(nums1[i]);
            }
        }
    }

    return output;
};
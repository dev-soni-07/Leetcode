/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let nextGreaterMap = new Map();

    for (let i = 0; i < nums2.length; i++) {
        nextGreaterMap.set(nums2[i], -1);
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[j] > nums2[i]) {
                nextGreaterMap.set(nums2[i], nums2[j]);
                break;
            }
        }
    }

    return nums1.map(num => nextGreaterMap.get(num));
};
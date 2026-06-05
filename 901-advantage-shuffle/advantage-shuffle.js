/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);

    let arr2 = nums2.map((val, idx) => [val, idx]);
    arr2.sort((a, b) => a[0] - b[0]);

    let n = nums1.length;
    let result = new Array(n);

    let left = 0;
    let right = n - 1;

    for (let num of nums1) {
        if (num > arr2[left][0]) {
            result[arr2[left][1]] = num;
            left++;
        } else {
            result[arr2[right][1]] = num;
            right--;
        }
    }

    return result;
};
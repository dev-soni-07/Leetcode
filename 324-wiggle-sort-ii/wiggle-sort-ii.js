/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);

    let left = Math.floor((n - 1) / 2);
    let right = n - 1;

    const out = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            out[i] = sorted[left];
            left--;
        } else {
            out[i] = sorted[right];
            right--;
        }
    }

    for (let i = 0; i < n; i++) nums[i] = out[i];
};
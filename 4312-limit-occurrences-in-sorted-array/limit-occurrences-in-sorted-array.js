/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    let write = 0;
    let count = 0;
    let prev = null;

    for (let num of nums) {
        if (num !== prev) {
            prev = num;
            count = 1;
        } else {
            count++;
        }

        if (count <= k) {
            nums[write] = num;
            write++;
        }
    }

    nums.length = write;
    return nums;
};
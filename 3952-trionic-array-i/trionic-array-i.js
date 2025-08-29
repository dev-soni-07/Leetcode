/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    const n = nums.length;
    if (n < 3) return false;

    let i = 0;

    while (i + 1 < n && nums[i] < nums[i + 1]) i++;
    if (i === 0) return false;

    let j = i;

    while (j + 1 < n && nums[j] > nums[j + 1]) j++;
    if (j === i) return false;

    let k = j;

    while (k + 1 < n && nums[k] < nums[k + 1]) k++;

    return k === n - 1 && k > j;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    const n = nums.length;
    if (n < 3) return false;

    let i = 0;

    // Step 1: strictly increasing
    while (i + 1 < n && nums[i] < nums[i + 1]) i++;
    if (i === 0) return false; // must increase at least once

    let j = i;

    // Step 2: strictly decreasing
    while (j + 1 < n && nums[j] > nums[j + 1]) j++;
    if (j === i) return false; // must decrease at least once

    let k = j;

    // Step 3: strictly increasing
    while (k + 1 < n && nums[k] < nums[k + 1]) k++;

    // Must end exactly at n-1 and have at least 1 step in final increase
    return k === n - 1 && k > j;
};
